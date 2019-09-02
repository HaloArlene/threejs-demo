const THREE = require('three');
const STLLoader = require('three-stl-loader')(THREE);
const OrbitControls = require('three-orbitcontrols');

//模型渲染基本配置
const config = {
  cameraPosition: { //照相机位置
    x: 600,
    y: 150,
    z: 0
  },
  defaultCameraOption: {  //照相机默认配置
    fov: 45,
    near: 0.1,
    far: 1500
  },
  meshColor: 0x0066CC,  //物体颜色
  axesSize: 800,  //坐标轴尺寸
  gridOption: { //网格
    size: 1000,
    division: 100,
    color1: 0x000055,
    color2: 0xFFFFFF
  },
  sceneTranslateY: -150, //场景y轴平移距离
  ambientLightColor: 0x555555,  //环境光颜色
  rendererClearColor: 0xCCCCCC,  //渲染器刷新色
  meshBaseSize: 300 //物体尺寸边界
};

export default class ModelLoader {
  constructor(elId, control = true, width, height) {
    this.frameId = elId;
    this.size = this.initSize(width, height);
    this.scene = new THREE.Scene();
    this.renderer = this.createRenderer();
    this.camera = this.createCamera();
    const {x, y, z} = config.cameraPosition;
    this.camera.position.set(x, y, z);
    this.initLights();
    this.loader = new STLLoader();
    this.reader = new FileReader();
    this.control = control;
  }

  renderFromFile(file) {
    this.onFileLoaded(geometry => {
      geometry.sourceFile = file.ETag;
      const material = new THREE.MeshLambertMaterial({color: config.meshColor, side: THREE.DoubleSide});
      const mesh = new THREE.Mesh(geometry, material);

      this.scene.add(ModelLoader.rebuildObject(mesh));

      this.camera.lookAt(this.scene.position);
      this.scene.add(this.camera);

      //X轴红色, Y轴绿色, Z轴蓝色
      if (this.control) {
        this.scene.add(new THREE.AxesHelper(config.axesSize));

        const {size, division, color1, color2} = config.gridOption;
        this.scene.add(new THREE.GridHelper(size, division, color1, color2));

        this.initBboxHelper(mesh);
      }

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.maxPolarAngle = 0.5 * Math.PI / 2;
      this.controls.enableZoom = false;

      let i =1;
      this.scene.position.y = config.sceneTranslateY;
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);

      const animate = () => {
        requestAnimationFrame(animate);
        if (this.control || i ===1) {
          i++;
          this.controls.update();
        }
        this.renderer.render(this.scene, this.camera);
      };
      animate();
    });

    if (this.reader.readAsBinaryString !== undefined) {
      this.reader.readAsBinaryString(file)
    } else {
      this.reader.readAsArrayBuffer(file)
    }
  }

  static rebuildObject(mesh) {
    //旋转
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = Math.PI / 2;
    mesh.position.set(0, 0, 0);
    //缩放
    const box = new THREE.Box3().setFromObject(mesh);
    const dx = Math.abs(box.max.x - box.min.x);
    const dy = Math.abs(box.max.y - box.min.y);
    const dz = Math.abs(box.max.z - box.min.z);
    const rate = config.meshBaseSize / Math.max(dx, dy, dz);
    mesh.scale.set(rate, rate, rate);
    //平移
    const box2 = new THREE.Box3().setFromObject(mesh);
    mesh.position.y = Math.abs(Math.abs(box2.min.y));
    const ax = (box2.max.x + box2.min.x) / 2;
    const az = (box2.max.z + box2.min.z) / 2;
    mesh.position.x = -ax;
    mesh.position.z = -az;
    return mesh;
  }

  //全屏
  enlargeMax() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.resize(width, height);
  }

  //恢复初始尺寸
  recoverSize() {
    const {width, height} = this.size;
    this.resize(width, height);
  }

  //更新大小
  resize(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  //解析STL文件
  onFileLoaded(callback) {
    this.reader.addEventListener('load', event => {
      const contents = event.target.result;
      const geometry = this.loader.parse(contents);
      geometry.sourceType = 'stl';
      callback(geometry);
    }, false);
  }

  //周围边框
  initBboxHelper(mesh) {
    const bboxHelper = new THREE.BoxHelper(mesh);
    bboxHelper.visible = true;
    bboxHelper.geometry.computeBoundingBox();
    this.scene.add(bboxHelper);
  }

  /* 灯光 */
  initLights() {
    //方向光
    this.initDirectionalLight(0, 400, 0);
    this.initDirectionalLight(0, -400, 0);
    this.initDirectionalLight(400, 0, 0);
    this.initDirectionalLight(0, 0, 400);
    //环境光
    const light2 = new THREE.AmbientLight(config.ambientLightColor);
    this.scene.add(light2);
    //点光源
    this.initPointLight(400, 600, 400);
    this.initPointLight(400, 600, -400);
    this.initPointLight(-400, 600, -400);
    this.initPointLight(-400, 600, 400);
  }

  //方向光
  initDirectionalLight(x, y, z) {
    const light = new THREE.DirectionalLight(0xFFFFFF);
    light.position.set(x, y, z).normalize();
    this.scene.add(light);
  }

  //点光源
  initPointLight(x, y, z) {
    const light = new THREE.PointLight(0xFFFFFF);
    light.position.set(x, y, z);
    this.scene.add(light);
  }

  initSize(w, h) {
    const frame = getFrame(this.frameId);
    const width = frame.clientWidth || w;
    const height = frame.clientHeight || h;
    this.size = {width, height};
    return this.size;
  }

  /* 创建相机 */
  createCamera({fov, near, far} = config.defaultCameraOption) {
    const {width, height} = this.size;
    return new THREE.PerspectiveCamera(fov, width / height, near, far);
  }

  /* 创建渲染器 */
  createRenderer() {
    const {width, height} = this.size;
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height);
    renderer.setClearColor(new THREE.Color(config.rendererClearColor));
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    getFrame(this.frameId).appendChild(renderer.domElement);
    return renderer;
  }
}

function getFrame(elId) {
  return document.getElementById(elId);
}

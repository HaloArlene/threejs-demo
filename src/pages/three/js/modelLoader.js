const THREE = require('three');
const STLLoader = require('three-stl-loader')(THREE);
const OrbitControls = require('three-orbitcontrols');

export default class ModelLoader {
  constructor(elId) {
    this.frameId = elId;
    this.size = this.initSize();
    this.scene = new THREE.Scene();
    this.renderer = this.createRenderer();
    this.camera = this.createCamera();
    this.camera.position.set(400, 150, 0);
    this.initLights();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.loader = new STLLoader();
    this.reader = new FileReader();
  }

  renderFromFile(file) {
    this.onFileLoaded(geometry => {
      geometry.sourceFile = file.ETag;
      const mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: 0xff5533, side: THREE.DoubleSide}));
      mesh.position.set(0, 0, 0);
      mesh.rotation.x = -Math.PI / 2;
      this.scene.add(mesh);

      this.camera.lookAt(this.scene.position);
      this.scene.add(this.camera);

      //X轴红色, Y轴绿色, Z轴蓝色
      this.scene.add(new THREE.AxesHelper(800));

      this.scene.add(new THREE.GridHelper(300, 40, 0x000055, 0xFFFFFF));
      this.initBboxHelper(mesh);

      this.scene.position.y = -80;
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);

      const animate = () => {
        requestAnimationFrame(animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      };
      animate();
    });

    if (this.reader.readAsBinaryString !== undefined) {
      this.reader.readAsBinaryString(file)
    } else {
      this.reader.readAsArrayBuffer(file)
    }

    /* 窗口变化时视图更新 */
    window.addEventListener('resize',  this.enlargeMax, false);
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
    const light = new THREE.DirectionalLight(0xFFFFFF);
    light.position.set(0, 99, 0).normalize();
    this.scene.add(light);
    //环境光
    const light2 = new THREE.AmbientLight(0x999999);
    this.scene.add(light2);
    //点光源
    const light3 = new THREE.PointLight(0x00FF00);
    light3.position.set(400, 0, 0);
    this.scene.add(light3);
  }

  initSize() {
    const frame = getFrame(this.frameId);
    const width = frame.clientWidth;
    const height = frame.clientHeight;
    this.size = {width, height};
    return this.size;
  }

  /* 创建相机 */
  createCamera({fov, near, far} = {fov: 45, near: 0.1, far: 1000}) {
    const {width, height} = this.size;
    return new THREE.PerspectiveCamera(fov, width / height, near, far);
  }

  /* 创建渲染器 */
  createRenderer() {
    const {width, height} = this.size;
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height);
    renderer.setClearColor(new THREE.Color(0x66666));
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    getFrame(this.frameId).appendChild(renderer.domElement);
    return renderer;
  }
}

function getFrame(elId) {
  return document.getElementById(elId);
}

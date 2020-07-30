const THREE = require('three');
const STLLoader = require('three-stl-loader')(THREE);

const OrbitControls = require('three-orbitcontrols');

//模型渲染基本配置
const getBasicModelLoaderConfig = () => ({
  cameraPosition: { //照相机位置
    x: 600,
    y: 200,
    z: 0
  },
  defaultCameraOption: {  //照相机默认配置
    fov: 45,
    near: 0.1,
    far: 5000
  },
  axesSize: 800,  //坐标轴尺寸
  gridOption: { //网格
    size: 1000,
    division: 100,
    color1: 0xFFFFFF,
    color2: 0xFFFFFF
  },
  sceneTranslateY: -120, //场景y轴平移距离
  ambientLightColor: 0xffffff,  //环境光颜色
  rendererClearColor: 0xCCCCCC,  //渲染器刷新色
  meshBaseSize: 300, //物体尺寸边界
  defaultMaterial: new THREE.MeshPhysicalMaterial({
    color: 0xff6633,  //物体颜色
    metalness: 1.0,
    roughness: 0.4,
    reflectivity: 0.5,
    side: THREE.DoubleSide,
  })
});
let config = getBasicModelLoaderConfig();
const AXES = {X: 'axes_x', Y: 'axes_y', Z: 'axes_z'};

function getFrame(elId) { //获取容器元素
  return document.getElementById(elId);
}

/*--模型渲染器--*/
export default class ModelLoader {
  constructor({
                elId, //容器id
                control = true, //是否添加控制器
                axes = false, //是否添加坐标轴
                boundingBox = false, //是否添加包围盒
                machineBox = false, //是否显示机器包围盒
                machineSize = null, //机器框尺寸
                grid = true,  //是否添加网格
                width,  //画布宽度
                height, //画布高度
              }) {
    config = getBasicModelLoaderConfig();
    //初始化参数
    this.frameId = elId;
    this.control = control;
    this.needAxes = axes;
    this.needBoundingBox = boundingBox;
    this.needMachineBox = machineBox;
    this.needGrid = grid;
    this.machineSize = machineSize;

    //若按机器边框渲染，重置参数
    if (this.needMachineBox) {
      this.control = false;
      this.needGrid = false;
      config.sceneTranslateY = 0;
      config.cameraPosition = {x: 0, y: -700, z: 0};
      config.defaultMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x6d0c74,
        metalness: 0.7,
        roughness: 0.7,
        reflectivity: 1,
        side: THREE.DoubleSide,
      });
    }
    this.loader = new STLLoader();
    //初始化场景
    this.size = this.initSize(width, height);
    this.scene = new THREE.Scene();
    this.renderer = this.createRenderer();
    this.camera = this.createCamera();
    const {x, y, z} = config.cameraPosition;
    this.camera.position.set(x, y, z);
    this.initLights();
    this.createRenderScene();
  }

  createRenderScene() {
    if (this.needMachineBox) {
      this.camera.lookAt(0, 0, 0);
    } else {
      this.camera.lookAt(this.scene.position);
    }
    this.scene.add(this.camera);

    if (this.control) {
      //控制器
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.maxPolarAngle = Math.PI;
      this.controls.enableZoom = true;
      this.controls.enableKeys = false;
    }

    if (this.needGrid) {
      //网格
      const {size, division, color1, color2} = config.gridOption;
      this.scene.add(new THREE.GridHelper(size, division, color1, color2));
    }

    //坐标轴：X轴红色, Y轴绿色, Z轴蓝色
    this.needAxes && this.scene.add(new THREE.AxesHelper(config.axesSize));

    let hasControl = true;
    this.scene.position.y = config.sceneTranslateY;
    this.renderer.render(this.scene, this.camera);

    const animate = () => {
      this.cycleId = requestAnimationFrame(animate);
      if (this.control || hasControl) {
        hasControl = false;
        this.controls && this.controls.update();
      }
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
    };
    animate();

    this.handleResize = () => {
      const {width, height} = this.initSize();
      this.resize(width, height);
    };
    window.addEventListener('resize', this.handleResize);
  }

  cleanAll() {  //释放所有资源
    window.removeEventListener('resize', this.handleResize);
    cancelAnimationFrame(this.cycleId);
    if (this.mesh) {
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
    }
    if (this.machineBox) {
      this.machineBox.geometry.dispose();
      this.machineBox.material.dispose();
    }
    this.scene && this.scene.dispose();
    this.controls && this.controls.dispose();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.renderer.context && (this.renderer.context = null);
    this.renderer.domElement = null;
    this.renderer = null;
  }

  renderFromFile(file, onFinish) {  //从模型文件创建
    this.reader = new FileReader();
    this.onFileLoaded(geometry => {
      geometry.sourceFile = file.ETag;
      this.renderMesh(geometry, onFinish);
    });

    if (this.reader.readAsBinaryString !== undefined) {
      this.reader.readAsBinaryString(file)
    } else {
      this.reader.readAsArrayBuffer(file)
    }
  }

  renderFromUrl(url, onProgress, onFinish, onerror) {  //从http请求url创建
    this.loader.load(url, geometry => {
      this.renderMesh(geometry, onFinish);
    }, onProgress, onerror)
  }

  //解析模型文件
  onFileLoaded(callback) {
    this.reader.addEventListener('load', event => {
      const contents = event.target.result;
      const geometry = this.loader.parse(contents);
      geometry.sourceType = 'stl';
      callback(geometry);
    }, false);
  }

  //渲染网格模型
  renderMesh(geometry, onFinish, material = config.defaultMaterial) {
    geometry.computeVertexNormals();  //模型顶点平滑化
    geometry.computeBoundingBox();  //计算模型包围盒
    geometry.center();  //模型居中

    this.mesh = new THREE.Mesh(geometry, material);

    //是否添加包围盒
    this.needBoundingBox && this.initBboxHelper(this.mesh);

    if (this.needMachineBox) {
      const {x, y, z} = this.machineSize;
      this.createMachineBox(x, y, z);
      this.scene.add(this.mesh);
    } else {
      this.scene.add(ModelLoader.rebuildObject(this.mesh));
    }
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    if (onFinish && onFinish instanceof Function) onFinish();
  }

  setMaterial(material) { //设置材质
    this.mesh.material.dispose();
    this.mesh.material = material;
  }

  //模型变换
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
    mesh.position.y -= box2.min.y;
    const ax = (box2.max.x + box2.min.x) / 2;
    const az = (box2.max.z + box2.min.z) / 2;
    mesh.position.x -= ax;
    mesh.position.z -= az;
    return mesh;
  }

  //全屏
  enlargeMax() {
    const {innerWidth, innerHeight} = window;
    this.resize(innerWidth, innerHeight);
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
    this.initDirectionalLight(0, -400, 0);
    this.initDirectionalLight(0, 400, 0);
    this.initDirectionalLight(400, 0, 0);
    this.initDirectionalLight(-400, 0, 0);
    this.initDirectionalLight(0, 0, 400);
    this.initDirectionalLight(0, 0, -400);

    const light = new THREE.SpotLight(0xffff00, 1, 100, Math.PI / 6, 25);
    light.position.set(0, 400, 0);
    this.scene.add(light);

    //环境光
    const light2 = new THREE.AmbientLight(config.ambientLightColor);
    this.scene.add(light2);
    //点光源
    this.initPointLight(600, 600, 600);
    this.initPointLight(-600, 600, 600);
    this.initPointLight(600, 600, -600);
    this.initPointLight(-600, 600, -600);
  }

  //方向光
  initDirectionalLight(x, y, z) {
    const light = new THREE.DirectionalLight(0xFFFFFF);
    light.position.set(x, y, z).normalize();
    this.scene.add(light);
  }

  //点光源
  initPointLight(x, y, z) {
    const light = new THREE.PointLight(0xFFFFFF, 1);
    light.position.set(x, y, z);
    this.scene.add(light);
  }

  //设置画布尺寸
  initSize(w, h) {
    let width, height;
    if (w && h) {
      width = w;
      height = h;
    } else {
      const frame = getFrame(this.frameId);
      width = frame.clientWidth;
      height = frame.clientHeight;
    }
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

  /**********************************************************************************************/

  //创建机器边框
  createMachineBox(x, y, z) {
    this.machineSize = {x, y, z};
    this.originGeometry = this.mesh.geometry.clone();
    const machineGeometry = new THREE.BoxGeometry(x, y, z);
    if (this.machineBox) {
      this.machineBox.geometry.dispose();
      this.machineBox.geometry = machineGeometry;
      this.resetObject();
    } else {
      this.machineBox = new THREE.Mesh(machineGeometry, new THREE.MeshNormalMaterial({
        transparent: true, opacity: 0.2, side: THREE.DoubleSide
      }));
      this.machineBox.position.set(0, 0, 0);
      this.scene.add(this.machineBox);
    }
    this.setModelSize();
    this.setAxesScaleLimits();
    this.resetMachineBoxView();
  }

  setAxesScaleLimits() {  //计算单轴缩放倍数范围
    if (!this.machineSize || !this.mesh) {
      return null;
    }
    const {x, y, z} = this.machineSize;
    const box = new THREE.Box3().setFromObject(this.mesh);
    const xSize = box.max.x - box.min.x, ySize = box.max.y - box.min.y, zSize = box.max.z - box.min.z;
    const getFloor = (l, s) => (Math.floor((l / s) * 100) / 100);
    const getCeil = (l, s) => (Math.ceil((l / s) * 100) / 100);
    this.axesScaleLimits = {
      x: {max: getFloor(x, xSize), min: getCeil(1, xSize)},
      y: {max: getFloor(y, ySize), min: getCeil(1, ySize)},
      z: {max: getFloor(z, zSize), min: getCeil(1, zSize)}
    }
  }

  getAxesScaleLimits() {  //获取单轴缩放倍数范围
    return this.axesScaleLimits || null;
  }

  setModelSize() {  //计算模型尺寸
    const box = new THREE.Box3().setFromObject(this.mesh);
    const xSize = (box.max.x - box.min.x).toFixed(2),
      ySize = (box.max.y - box.min.y).toFixed(2),
      zSize = (box.max.z - box.min.z).toFixed(2);
    this.modelSize = {xSize, ySize, zSize};
  }

  getModelSize() { //获取模型尺寸
    return this.modelSize || null;
  }

  resetObject() { //重置模型
    this.mesh.geometry.dispose();
    this.mesh.geometry = this.originGeometry.clone();
    this.resetMachineBoxView();
    this.setModelSize();
    this.setAxesScaleLimits();
  }

  handleTransitionByMatrix(matrix) {  //执行变换
    this.mesh.geometry.applyMatrix(matrix);
    this.resetMachineBoxView();
    this.setModelSize();
  }

  resetMachineBoxView() { //刷新机器边框位置及照相机位置
    const mBox = new THREE.Box3().setFromObject(this.machineBox);
    const box = new THREE.Box3().setFromObject(this.mesh);
    const boxCenterZ = (box.max.z + box.min.z) / 2;
    const boxH = box.max.z - box.min.z;
    const dz = boxCenterZ - mBox.min.z - boxH / 2;
    this.machineBox.position.z += dz;

    const mBox2 = new THREE.Box3().setFromObject(this.machineBox);
    const yLen = mBox2.max.y - mBox2.min.y;
    const asp = 2.3333;
    this.camera.position.set(0, -yLen * asp, (mBox2.max.z + mBox2.min.z) / 2);
  }

  rotateByMatrix(axis, radians) {  //应用旋转矩阵
    let rotateMatrix = new THREE.Matrix4();
    rotateMatrix.makeRotationAxis(axis.normalize(), radians);
    this.handleTransitionByMatrix(rotateMatrix);
  }

  rotateObject(axes, angle) { //绕坐标轴旋转物体
    const radian = THREE.Math.degToRad(angle);
    switch (axes) {
      case AXES.X:
        this.rotateByMatrix(new THREE.Vector3(1, 0, 0), radian);
        break;
      case AXES.Y:
        this.rotateByMatrix(new THREE.Vector3(0, 1, 0), radian);
        break;
      case AXES.Z:
        this.rotateByMatrix(new THREE.Vector3(0, 0, 1), radian);
        break;
      default:
        break;
    }
    this.setAxesScaleLimits();
  }

  rotateObjX(angle) { //绕X轴旋转
    this.rotateObject(AXES.X, angle);
  }

  rotateObjY(angle) { //绕Y轴旋转
    this.rotateObject(AXES.Y, angle);
  }

  rotateObjZ(angle) { //绕Z轴旋转
    this.rotateObject(AXES.Z, angle);
  }

  scaleByMatrix(x, y, z) {  //应用缩放矩阵
    let scaleMatrix = new THREE.Matrix4();
    scaleMatrix.makeScale(x, y, z);
    this.handleTransitionByMatrix(scaleMatrix);
  }

  scaleObject(scale) {  //缩放模型
    this.scaleByMatrix(scale, scale, scale);
  }

  scaleAroundAxes(axes, scale) {  // 单轴缩放
    switch (axes) {
      case AXES.X:
        this.scaleByMatrix(scale, 1, 1);
        break;
      case AXES.Y:
        this.scaleByMatrix(1, scale, 1);
        break;
      case AXES.Z:
        this.scaleByMatrix(1, 1, scale);
        break;
      default:
        break;
    }
  }

  scaleObjX(scale) {  // x轴方向缩放
    this.scaleAroundAxes(AXES.X, scale);
  }

  scaleObjY(scale) {  // y轴方向缩放
    this.scaleAroundAxes(AXES.Y, scale);
  }

  scaleObjZ(scale) {  // z轴方向缩放
    this.scaleAroundAxes(AXES.Z, scale);
  }
}

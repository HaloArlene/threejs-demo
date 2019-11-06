import * as THREE from 'three';

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      geometry: null,
      material: null,
      mesh: null,
      controls: null
    }
  },
  beforeDestroy() {
    if (this.mesh) {
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
    }
    this.camera && this.camera.dispose();
    this.scene && this.scene.dispose();
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
      this.renderer.context = null;
      this.renderer.domElement = null;
      this.renderer = null;
    }
  },
  methods: {
    getSize() {
      const frame = document.getElementById('canvas-frame');
      const width = frame.offsetWidth;
      const height = frame.offsetHeight;
      return {
        width,
        height,
        aspect: width / height
      }
    },
    createRenderer(clearColor = 0xFFFFFF) {
      const {width, height} = this.getSize();
      const renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.gammaOutput = true;
      renderer.setSize(width, height);
      document.getElementById('canvas-frame').appendChild(renderer.domElement);
      renderer.setClearColor(clearColor, 1.0);
      return renderer;
    },
    createScene() {
      return new THREE.Scene();
    },
    createCamera(fov, near, far) {
      return new THREE.PerspectiveCamera(fov, this.getSize().aspect, near, far);
    },
    createControls(camera, renderer) {
      const OrbitControls = require('three-orbitcontrols');
      return new OrbitControls(camera, renderer.domElement);
    }
  }
}

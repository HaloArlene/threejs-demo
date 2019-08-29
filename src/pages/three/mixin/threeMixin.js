import * as THREE from 'three';

export default {
  data() {
    return {}
  },
  methods: {
    getSize() {
      const frame = document.getElementById('canvas-frame');
      const width = frame.clientWidth;
      const height = frame.clientHeight;
      return {
        width,
        height,
        aspect: width / height
      }
    },
    createRenderer() {
      const {width, height} = this.getSize();
      const renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.gammaOutput = true;
      renderer.setSize(width, height);
      document.getElementById('canvas-frame').appendChild(renderer.domElement);
      renderer.setClearColor(0xFFFFFF, 1.0);
      return renderer;
    },
    createScene() {
      return new THREE.Scene();
    },
    createCamera(fov, near, far) {
      const {width, height} = this.getSize();
      return new THREE.PerspectiveCamera(fov, width / height, near, far);
    },
    createControls(camera, renderer) {
      const OrbitControls = require('three-orbitcontrols');
      return new OrbitControls(camera, renderer.domElement);
    }
  }
}

import * as THREE from 'three';

export default {
  data() {
    return {
      renderer: null,
      camera: null,
      scene: null
    }
  },
  methods: {
    getSize() {
      const frame = document.getElementById('canvas-frame');
      return {
        width: frame.clientWidth,
        height: frame.clientHeight
      }
    },
    createRenderer() {
      const {width, height} = this.getSize();
      const renderer = new THREE.WebGLRenderer({antialias: true});
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
    }
  }
}
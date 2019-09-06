<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Cube']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import * as THREE from 'three'
  import ThreeMixin from './mixin/threeMixin'
  import Breadcrumb from "../../components/breadcrumb";

  export default {
    name: "cubeDemo",
    components: {Breadcrumb},
    mixins: [ThreeMixin],
    mounted() {
      const renderer = this.createRenderer();
      const scene = this.createScene();
      const camera = this.createCamera(75, 0.1, 5);
      camera.position.z = 3;

      const light = new THREE.DirectionalLight(0xFFFFFF, 1);
      light.position.set(-1, 2, 4);
      scene.add(light);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const cubes = [
        this.createCube(geometry, 0xFF99E5, 0),
        this.createCube(geometry, 0x44aa88, 2),
        this.createCube(geometry, 0x8844aa, -2)
      ];
      cubes.forEach(cube => {
        scene.add(cube);
      });

      const Stats = require('stats.js');
      const stats = new Stats();
      stats.showPanel(1);
      stats.dom.style.position = 'absolute';
      document.getElementById('canvas-frame').appendChild(stats.dom);

      const animation = time => {
        stats.begin();
        time *= 0.001;
        cubes.forEach((cube, index) => {
          const speed = 1 + index * .1;
          const rot = speed * time;
          cube.rotation.x = rot;
          cube.rotation.y = rot;
        });
        renderer.render(scene, camera);
        stats.end();
        requestAnimationFrame(animation);
      };
      animation();
    },
    methods: {
      createCube(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({color});
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = x;
        return cube;
      }
    }
  }
</script>

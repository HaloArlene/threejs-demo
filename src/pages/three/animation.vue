<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Animation']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "../../components/breadcrumb";
  import threeMixin from "./mixin/threeMixin";
  import * as THREE from "three";
  import * as Stats from "stats.js";

  export default {
    mixins: [threeMixin],
    components: {Breadcrumb},
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        const radius = 0.5, maxHeight = 5;
        let id = null, isMoving = true, v = 0, a = -0.01;

        const stats = new Stats();
        stats.dom.style.position = 'absolute';
        stats.dom.style.right = '0px';
        stats.dom.style.left = 'auto';
        document.getElementById('canvas-frame').appendChild(stats.dom);

        const camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
        camera.position.set(5, 10, 20);
        camera.lookAt(new THREE.Vector3(0, 3, 0));

        const geometry = new THREE.SphereGeometry(radius, 16, 12);
        const material = new THREE.MeshBasicMaterial({color: '0xff0000'});
        const ballMesh = new THREE.Mesh(geometry, material);
        ballMesh.position.y = radius;
        const scene = new THREE.Scene();
        scene.add(ballMesh);

        const light = new THREE.DirectionalLight(0xffffff);
        light.position.set(10, 10, 15);
        scene.add(light);

        const renderer = this.createRenderer(0x000000);

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('../../../static/img/chess_board.png', texture => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(4, 4);
          const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshLambertMaterial({map: texture}));
          plane.rotation.x = -Math.PI / 2;
          scene.add(plane);

          renderer.render(scene, camera);
          id = requestAnimationFrame(draw);
        });

        const draw = () => {
          stats.begin();
          if (isMoving) {

            ballMesh.position.y += v;
            v += a;

            if (ballMesh.position.y < radius) {
              v = -v * 0.9;
            }
            if (Math.abs(v) < 0.0001) {
              isMoving = false;
              ballMesh.position.y = radius;
              cancelAnimationFrame(id);
            }
          }
          renderer.render(scene, camera);
          id = requestAnimationFrame(draw);
          stats.end();
        };
      }
    }
  }
</script>

<style scoped>

</style>

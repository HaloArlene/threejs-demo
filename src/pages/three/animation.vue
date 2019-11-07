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

        this.stats = new Stats();
        this.stats.dom.style.position = 'absolute';
        this.stats.dom.style.right = '0px';
        this.stats.dom.style.left = 'auto';
        document.getElementById('canvas-frame').appendChild(this.stats.dom);

        this.camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
        this.camera.position.set(5, 10, 20);
        this.camera.lookAt(new THREE.Vector3(0, 3, 0));

        const geometry = new THREE.SphereGeometry(radius, 16, 12);
        const material = new THREE.MeshBasicMaterial({color: '0xff0000'});
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.y = radius;
        this.scene = new THREE.Scene();
        this.scene.add(this.mesh);

        const light = new THREE.DirectionalLight(0xffffff);
        light.position.set(10, 10, 15);
        this.scene.add(light);

        this.renderer = this.createRenderer(0x000000);

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('../../../static/img/chess_board.png', texture => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(4, 4);
          const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshLambertMaterial({map: texture}));
          plane.rotation.x = -Math.PI / 2;
          this.scene.add(plane);

          this.renderer.render(this.scene, this.camera);
          id = requestAnimationFrame(draw);
        });

        const draw = () => {
          this.stats.begin();
          if (isMoving) {

            this.mesh.position.y += v;
            v += a;

            if (this.mesh.position.y < radius) {
              v = -v * 0.9;
            }
            if (Math.abs(v) < 0.0001) {
              isMoving = false;
              this.mesh.position.y = radius;
              cancelAnimationFrame(this.cycleId);
            }
          }
          this.renderer.render(this.scene, this.camera);
          this.animationId = requestAnimationFrame(draw);
          this.stats.end();
        };
      }
    }
  }
</script>

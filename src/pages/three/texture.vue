<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Texture']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import threeMixin from "./mixin/threeMixin";
  import * as THREE from 'three';
  import Breadcrumb from "../../components/breadcrumb";

  export default {
    components: {Breadcrumb},
    mixins: [threeMixin],
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        const renderer = this.createRenderer();
        const scene = this.createScene();
        const camera = this.createCamera(50, 1, 2000);
        camera.position.z = 500;

        const geometry = new THREE.BoxBufferGeometry(200, 200, 200);
        const material = new THREE.MeshBasicMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);


        const controls = this.createControls(camera, renderer);

        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        // animate();
      }
    }
  }
</script>

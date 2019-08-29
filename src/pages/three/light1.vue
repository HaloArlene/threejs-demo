<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item>Three</a-breadcrumb-item>
      <a-breadcrumb-item>Light</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import threeMixin from "./mixin/threeMixin";
  import * as THREE from "three";

  export default {
    mixins: [threeMixin],
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        const renderer = this.createRenderer();
        const camera = this.createCamera(45, 1, 1500);
        const scene = this.createScene();

        camera.position.set(600, 0, 600);
        camera.up.set(0, 1, 0);
        camera.lookAt(0, 0, 0);

        const light = new THREE.DirectionalLight(0xFF0000, 1);
        light.position.set(1, 0, 4);
        scene.add(light);

        const light1 = new THREE.PointLight(0xFF0000);
        light.position.set(0, 40, 50);
        scene.add(light1);

        scene.add(this.createObject(0, 0, 0));
        scene.add(this.createObject(-300, 0, 0));
        scene.add(this.createObject(0, -150, 0));
        scene.add(this.createObject(0, 150, 0));
        scene.add(this.createObject(300, 0, 0));
        scene.add(this.createObject(0, 0, 100));

        const controls = this.createControls(camera, renderer);
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      createObject(x, y, z) {
        const geometry = new THREE.BoxGeometry(200, 100, 50, 4, 4);
        const material = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        return mesh;
      }
    }
  }
</script>

<style scoped>

</style>

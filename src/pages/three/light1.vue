<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Light']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import threeMixin from "./mixin/threeMixin";
  import * as THREE from "three";
  import Breadcrumb from "../../components/breadcrumb";

  export default {
    components: {Breadcrumb},
    mixins: [threeMixin],
    data() {
      return {
        objects: []
      }
    },
    mounted() {
      this.initThree();
    },
    beforeDestroy() {
      if (this.objects.length) {
        this.objects.forEach(obj => {
          obj.geometry.dispose();
          obj.material.dispose();
        });
      }
    },
    methods: {
      initThree() {
        this.renderer = this.createRenderer();
        this.camera = this.createCamera(45, 1, 1500);
        this.scene = this.createScene();

        this.camera.position.set(600, 0, 600);
        this.camera.up.set(0, 1, 0);
        this.camera.lookAt(0, 0, 0);

        const light = new THREE.DirectionalLight(0xFF0000, 1);
        light.position.set(1, 0, 4);
        this.scene.add(light);

        const light1 = new THREE.PointLight(0xFF0000);
        light.position.set(0, 40, 50);
        this.scene.add(light1);

        this.objects = [
          this.createObject(0, 0, 0), this.createObject(-300, 0, 0), this.createObject(0, -150, 0),
          this.createObject(0, 150, 0), this.createObject(300, 0, 0), this.createObject(0, 0, 100)
        ];

        this.objects.forEach(obj => this.scene.add(obj));

        this.controls = this.createControls(this.camera, this.renderer);
        const animate = () => {
          this.animationId = requestAnimationFrame(animate);
          this.controls.update();
          this.renderer.render(this.scene, this.camera);
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

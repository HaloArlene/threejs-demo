<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Animation']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import * as THREE from 'three'
  import Breadcrumb from "../../components/breadcrumb";

  export default {
    name: "animation",
    components: {Breadcrumb},
    data() {
      return {
        renderer: null,
        camera: null,
        scene: null,
        mesh: null
      }
    },
    mounted() {
      this.startThree();
    },
    methods: {
      startThree() {
        this.renderer = this.createRenderer();
        this.camera = this.createCamera();
        this.scene = this.createScene();
        this.mesh = this.createMesh();
        this.createLights(this.scene);
        this.scene.add(this.mesh);
        this.animation();
      },
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
      createCamera() {
        const {width, height} = this.getSize();
        const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 600;
        camera.up.x = 0;
        camera.up.y = 1;
        camera.up.z = 0;
        camera.lookAt(0, 0, 0);
        return camera;
      },
      createScene() {
        return new THREE.Scene()
      },
      createLights(scene) {
        let light = new THREE.AmbientLight(0xFF0000);
        light.position.set(100, 100, 200);
        scene.add(light);
        light = new THREE.PointLight(0x00FF00);
        light.position.set(0, 0, 300);
        scene.add(light);
      },
      createMesh() {
        const geometry = new THREE.CylinderGeometry(100, 150, 400);
        const material = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        return new THREE.Mesh(geometry, material);
      },
      animation() {
        if (this.mesh.position.x > -400) {
          this.mesh.position.x -= 1;
        }
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animation);
      }
    }
  }
</script>

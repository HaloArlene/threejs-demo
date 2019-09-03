<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Grid']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import * as THREE from 'three'
  import Breadcrumb from "../../components/breadcrumb";

  export default {
    name: "meshGrid",
    components: {Breadcrumb},
    data() {
      return {};
    },
    mounted() {
      this.startThree();
    },
    methods: {
      startThree() {
        const renderer = this.createRenderer();
        const scene = this.createScene();
        scene.add(this.createLight());
        this.createLines(scene);
        renderer.clear();
        renderer.render(scene, this.createCamera())
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
        camera.position.y = 1000;
        camera.position.z = 0;
        camera.up.x = 0;
        camera.up.y = 0;
        camera.up.z = 1;
        camera.lookAt(0, 0, 0);
        return camera;
      },
      createScene() {
        return new THREE.Scene()
      },
      createLight() {
        const light = new THREE.DirectionalLight(0xFF0000, 1.0);
        light.position.set(100, 100, 200);
        return light;
      },
      createLines(scene) {
        const geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-500, 0, 0), new THREE.Vector3(500, 0, 0));
        const createLine = () => new THREE.Line(geometry, new THREE.LineBasicMaterial({
          color: 0x000000,
          opacity: 0.2
        }));
        for (let i = 0; i <= 20; i++) {
          const line = createLine();
          line.position.z = (i * 50) - 500;
          scene.add(line);

          const line2 = createLine();
          line2.position.x = (i * 50) - 500;
          line2.rotation.y = 90 * Math.PI / 180;
          scene.add(line2);
        }
      }
    }
  }
</script>

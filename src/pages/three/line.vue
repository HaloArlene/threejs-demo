<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Line']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import * as THREE from 'three'
  import Breadcrumb from "../../components/breadcrumb";

  export default {
    name: "modelRender",
    components: {Breadcrumb},
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        cube: null,
        line: null,
        animationId: null,
      }
    },
    mounted() {
      this.initThree();
    },
    beforeDestroy() {
      this.animationId && cancelAnimationFrame(this.animationId);
      if (this.line) {
        this.line.geometry.dispose();
        this.line.material.dispose();
      }
      if (this.cube) {
        this.cube.geometry.dispose();
        this.cube.material.dispose();
      }
      this.scene && this.scene.dispose();
      this.renderer.dispose();
      this.renderer.forceContextLoss();
      this.renderer.domElement = null;
      this.renderer = null;
    },
    methods: {
      initThree() {
        const frame = document.getElementById('canvas-frame');
        const width = frame.clientWidth;
        const height = frame.clientHeight;

        this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 500);
        this.camera.position.set(0, 0, 50);
        this.camera.lookAt(0, 0, 0);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(width, height);
        frame.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
        const geometry2 = new THREE.Geometry();
        geometry2.vertices.push(new THREE.Vector3(-10, 0, 0), new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 0, 0));
        this.line = new THREE.Line(geometry2, lineMaterial);
        this.scene.add(this.line);

        const animate = () => {
          this.animationId = requestAnimationFrame(animate);
          this.cube.rotation.x += 0.01;
          this.cube.rotation.y += 0.01;
          this.renderer.render(this.scene, this.camera);
        };
        animate();
      }
    }
  }
</script>

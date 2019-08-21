<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item>Three</a-breadcrumb-item>
      <a-breadcrumb-item>Model Rendering</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import * as THREE from 'three'

  export default {
    name: "modelRender",
    data() {
      return {}
    },
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        const frame = document.getElementById('canvas-frame');
        const width = frame.clientWidth;
        const height = frame.clientHeight;

        const camera = new THREE.PerspectiveCamera(45, width / height, 1, 500);
        camera.position.set( 0, 0, 50 );
        camera.lookAt( 0, 0, 0 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        frame.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
        const geometry2 = new THREE.Geometry();
        geometry2.vertices.push(new THREE.Vector3(-10, 0, 0), new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 0, 0));
        const line = new THREE.Line(geometry2, lineMaterial);
        scene.add(line);

        const animate = () => {
          requestAnimationFrame(animate);
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
        };

        animate();
      }
    }
  }
</script>

<style scoped>

</style>
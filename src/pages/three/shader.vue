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
  import GlslCanvas from 'glslCanvas';

  export default {
    mixins: [threeMixin],
    components: {Breadcrumb},
    mounted() {
      this.renderer = this.createRenderer();
      this.scene = this.createScene();
      this.camera = this.createCamera(45, 0.1, 50);
      this.camera.position.set(5, 15, 25);
      this.camera.lookAt(0, 0, 0);
      this.scene.add(this.camera);

      const light = new THREE.DirectionalLight();
      light.position.set(3, 2, 5);
      this.scene.add(light);

      const geometry = new THREE.BoxBufferGeometry(6, 6, 6);

      const textureLoader = new THREE.TextureLoader();

      const canvas = document.getElementById('canvas-frame').firstElementChild;
      const sandbox = new GlslCanvas(canvas);
      const frag_code = `
        precision highp float;
        uniform sampler2D map;
        varying vec2 vUv;
        void main() {
          gl_FragColor = texture2D( map, vUv );
        }
      `;
      const vert_code = `
        precision highp float;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        attribute vec3 position;
        attribute vec3 offset;
        attribute vec2 uv;
        attribute vec4 orientation;
        varying vec2 vUv;
        vec3 applyQuaternionToVector( vec4 q, vec3 v ) {
          return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );
        }
        void main() {
          vec3 vPosition = applyQuaternionToVector( orientation, position );
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( offset + vPosition, 1.0 );
        }
      `;
      sandbox.load(frag_code, vert_code);

      const material = new THREE.RawShaderMaterial({
        fragmentShader: sandbox.fragmentString,
        vertexShader: sandbox.vertexString,
        uniforms: {
          ...sandbox.uniforms,
          map: {value: textureLoader.load('../../../static/img/shader_01.jpg')}
        },
      });
      material.extensions.derivatives = true;
      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);

      const draw = () => {
        this.mesh.rotation.y += 0.01;
        if (this.mesh.rotation.y > Math.PI * 2) {
          this.mesh.rotation.y -= Math.PI * 2;
        }
        this.renderer.render(this.scene, this.camera);
        this.animationId = requestAnimationFrame(draw);
      };
      draw();
    }
  }
</script>

<style scoped>

</style>

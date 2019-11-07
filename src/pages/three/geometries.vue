<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Geometries']"/>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu theme="light" mode="inline" :defaultSelectedKeys="['0']" :selectedKeys="selectedKeys"
                @click="clickItem">
          <a-menu-item v-for="(item, index) in geometries" :key="index.toString()">{{ item }}</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content>
          <div class="main-page">
            <div class="three-canvas-frame" id="canvas-frame"></div>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  import * as THREE from 'three';
  import threeMixin from "./mixin/threeMixin";
  import Breadcrumb from "../../components/breadcrumb";

  export default {
    components: {Breadcrumb},
    mixins: [threeMixin],
    data() {
      return {
        selectedKeys: ['0'],
        geometries: [
            'Box', 'Plane', 'Sphere', 'Sphere 2', 'Sphere 3', 'Sphere 4', 'Sphere 5', 'Circle', 'Cylinder', 'Cylinder 2',
            'Tetrahedron', 'Octahedron', 'Icosahedron', 'Torus', 'Torus 2', 'Torus 3', 'Torus Knot'
        ],
        geometryType: 'box'
      }
    },
    mounted() {
      this.initThree();
    },
    methods: {
      clickItem({item, key, keyPath}) {
        this.geometryType = this.geometries[key].toLowerCase();
        this.selectedKeys = [key];
        this.renderGeometry();
      },
      initThree() {
        this.renderer = this.createRenderer();
        this.camera = this.createCamera(45, 1, 50);
        this.camera.position.set(4, 5, 8);
        this.camera.lookAt(0, 0, 0);

        this.scene = this.createScene();
        this.scene.add(this.camera);
        this.mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 3, 2, 2, 3), this.createMaterial());
        this.scene.add(this.mesh);

        this.scene.add(new THREE.AxesHelper(40));

        const controls = this.createControls(this.camera, this.renderer);

        const animate = () => {
          this.renderer.render(this.scene, this.camera);
          controls.update();
          this.animationId = requestAnimationFrame(animate);
        };
        animate();
      },
      createMaterial() {
        return new THREE.MeshBasicMaterial({color: 0xFF0000, wireframe: true});
      },
      renderGeometry() {
        this.mesh.geometry.dispose();
        this.mesh.geometry = {
          'box': new THREE.BoxGeometry(1, 2, 3, 2, 2, 3),
          'plane': new THREE.PlaneGeometry(2, 4),
          'sphere': new THREE.SphereGeometry(2, 8, 6),
          'sphere 2': new THREE.SphereGeometry(2, 18, 12),
          'sphere 3': new THREE.SphereGeometry(2, 8, 6, Math.PI / 6, Math.PI / 3),
          'sphere 4': new THREE.SphereGeometry(2, 8, 6, 0, Math.PI * 2, Math.PI / 6, Math.PI / 3),
          'sphere 5': new THREE.SphereGeometry(2, 8, 6, Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2),
          'circle': new THREE.CircleGeometry(3, 18, Math.PI / 3, Math.PI / 3 * 4),
          'cylinder': new THREE.CylinderGeometry(2, 2, 4, 18, 3),
          'cylinder 2': new THREE.CylinderGeometry(2, 3, 4, 18, 3, true),
          'tetrahedron': new THREE.TetrahedronGeometry(3),
          'octahedron': new THREE.OctahedronGeometry(3),
          'icosahedron': new THREE.IcosahedronGeometry(3),
          'torus': new THREE.TorusGeometry(3, 1, 4, 8),
          'torus 2': new THREE.TorusGeometry(3, 1, 12, 18),
          'torus 3': new THREE.TorusGeometry(3, 1, 4, 8, Math.PI * 2 / 3),
          'torus knot': new THREE.TorusKnotGeometry(2, 0.5, 32, 8)
        }[this.geometryType];
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
      },
    }
  }
</script>

<style scoped>
  .three-canvas-frame {
    width: calc(100% - 200px);
  }
</style>

<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Material']"/>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu theme="light" mode="inline" :defaultSelectedKeys="[0]" :selectedKeys="selectedKeys"
                @click="clickItem">
          <a-menu-item v-for="(item, index) in materials" :key="index">{{ item }}</a-menu-item>
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
  import Breadcrumb from "../../components/breadcrumb";
  import threeMixin from "./mixin/threeMixin";
  import * as THREE from "three";

  export default {
    components: {Breadcrumb},
    mixins: [threeMixin],
    data() {
      return {
        selectedKeys: [0],
        materials: [
            'Basic Material', 'Lambert Material', 'Phong Material', 'Normal Material', 'Texture', 'Textures',
            'Repeating Texture'
        ],
      }
    },
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        this.camera = this.createCamera(45, 0.1, 50);
        this.camera.position.set(4, 5, 8);
        this.camera.lookAt(0, 0, 0);

        this.scene = this.createScene();
        this.scene.add(this.camera);

        this.scene.add(new THREE.AmbientLight(0xFFFFFF));
        const pointLight = new THREE.PointLight(0xFFFFFF);
        pointLight.position.set(3, 1, 3);
        this.scene.add(pointLight);
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
        directionalLight.position.set(-2, 2, 2.5);
        this.scene.add(directionalLight);

        this.scene.add(new THREE.AxesHelper(20));

        const geometry = new THREE.BoxGeometry(3, 3, 3);
        this.mesh = new THREE.Mesh(geometry, this.getMaterial('0'));
        this.scene.add(this.mesh);

        this.renderer = this.createRenderer(0x000000);
        this.controls = this.createControls(this.camera, this.renderer);

        const animate = () => {
          requestAnimationFrame(animate);
          this.controls.update();
          this.renderer.render(this.scene, this.camera);
        };
        animate();
      },
      getMaterial(key) {
        return {
          '0': new THREE.MeshBasicMaterial({color: 0xFFFF00, transparent: true, opacity: 0.75}),
          '1': new THREE.MeshLambertMaterial({color: 0xFFFF00, emissive: 0xff0000}),
          '2': new THREE.MeshPhongMaterial({color: 0xff0000, specular: 0xffff00, shininess: 100}),
          '3': new THREE.MeshNormalMaterial(),
        }[key];
      },
      clickItem({item, key, keyPath}) {
        this.selectedKeys = [key];
        this.mesh.material.dispose();
        if (key < 4) {
          this.mesh.material = this.getMaterial(key);
        }

        const textureLoader =  new THREE.TextureLoader();
        if (key === 4) {
          textureLoader.load('../../../static/img/dog.jpeg', texture => {
            this.mesh.material = new THREE.MeshBasicMaterial({map: texture});
          });
        }

        if (key === 5) {
          const materials = [];
          for (let i = 0; i < 6; ++i) {
            textureLoader.load(`../../../static/img/num_${i + 1}.png`, texture => {
              materials.push(new THREE.MeshBasicMaterial({map: texture}));
              if (i === 5) {
                this.mesh.material = materials;
                this.renderer.render(this.scene, this.camera);
              }
            });
          }
        }

        if (key === 6) {
          textureLoader.load('../../../static/img/chess_board.png', texture => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(4, 4);
            this.mesh.material = new THREE.MeshBasicMaterial({map: texture});
          });
        }
      }
    }
  }
</script>

<style scoped>
  .three-canvas-frame {
    width: calc(100% - 200px);
  }
</style>

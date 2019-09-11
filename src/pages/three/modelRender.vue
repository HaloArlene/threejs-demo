<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Model Renderer']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import ModelLoader from "../../utils/modelLoader";
  import Breadcrumb from "../../components/breadcrumb";
  import * as THREE from "three";
  import DDSLoader from 'three/examples/js/loaders/DDSLoader';


  export default {
    components: {Breadcrumb},
    mounted() {
      const modelLoader = new ModelLoader('canvas-frame');
      modelLoader.loader.load('../../../static/stl/thinker.stl', geometry => {

        const ddsLoader = new DDSLoader();

        ddsLoader.load('../../../static/img/dds/shader_01.dds', texture => {
          modelLoader.renderMesh(geometry, new THREE.MeshPhysicalMaterial({map: texture}));
        });

        // const textureLoader = new THREE.TextureLoader();
        // textureLoader.load('../../../static/img/shader_04.jpg', baseTexture => {
        //
        // });
      });
    },
  }
</script>

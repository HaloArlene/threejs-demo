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

  export default {
    components: {Breadcrumb},
    mounted() {
      const modelLoader = new ModelLoader('canvas-frame');

      modelLoader.loader.load('../../../static/stl/齐天大圣.stl', geometry => {
        modelLoader.renderMesh(geometry);
      });
    },
  }
</script>

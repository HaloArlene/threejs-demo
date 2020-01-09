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
    data() {
      return {
        modelLoader: null
      }
    },
    mounted() {
      this.modelLoader = new ModelLoader({elId: 'canvas-frame'});

      // ../../../static/stl/齐天大圣.stl
      this.modelLoader.renderFromUrl('http://d2qude1qt7mm3w.cloudfront.net/EE661C03705A6B4DA24F212274ECD3CB');
    },
    beforeDestroy() {
      this.modelLoader && this.modelLoader.cleanAll();
    }
  }
</script>

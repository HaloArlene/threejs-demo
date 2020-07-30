<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Model Renderer']" />
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
import ModelLoader from "../../utils/modelLoader";
import Breadcrumb from "../../components/breadcrumb";

export default {
  components: { Breadcrumb },
  data() {
    return {
      modelLoader: null
    };
  },
  mounted() {
    this.modelLoader = new ModelLoader({ elId: "canvas-frame" });

    // ../../../static/stl/齐天大圣.stl
    this.modelLoader.renderFromUrl("../../../static/stl/齐天大圣.stl");
  },
  beforeDestroy() {
    this.modelLoader && this.modelLoader.cleanAll();
  }
};
</script>

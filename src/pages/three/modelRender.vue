<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item>Three</a-breadcrumb-item>
      <a-breadcrumb-item>Model Rendering</a-breadcrumb-item>
    </a-breadcrumb>

    <a-upload name="file" :multiple="false" @change="handleChange" :beforeUpload="beforeUpload">
      <a-button>
        <a-icon type="upload"/>
        Click to Upload (.stl file)
      </a-button>
    </a-upload>

    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import ModelLoader from "./js/modelLoader";

  export default {
    name: "modelRender",
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      handleChange() {

      },
      beforeUpload(file) {
        console.log(file);
        const loader = new ModelLoader('canvas-frame');
        loader.renderFromFile(file);
      }
    }
  }
</script>

<style scoped>

</style>

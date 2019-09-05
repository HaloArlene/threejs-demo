<template>
  <div>
   <breadcrumb :crumbs="['Three', 'Model Renderer']"/>

    <a-upload name="file" :multiple="false" @change="handleChange" :beforeUpload="beforeUpload">
      <a-button>
        <a-icon type="upload"/>
        Click to Upload (.stl file only)
      </a-button>
    </a-upload>

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

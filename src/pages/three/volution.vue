<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Volution']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "../../components/breadcrumb";
  import * as THREE from "three";
  import GlslCanvas from 'glslCanvas';

  export default {
    components: {Breadcrumb},
    mounted() {

    }
  }
</script>

<style scoped>

</style>

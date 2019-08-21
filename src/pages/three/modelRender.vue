<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item>Three</a-breadcrumb-item>
      <a-breadcrumb-item>Model Rendering</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import * as THREE from 'three'

  export default {
    name: "modelRender",
    data() {
      return {}
    },
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {

      }
    }
  }
</script>

<style scoped>

</style>
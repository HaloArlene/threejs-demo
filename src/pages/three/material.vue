<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Material']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "../../components/breadcrumb";

  export default {
    components: {Breadcrumb},
    data() {
      return {
      }
    }
  }
</script>

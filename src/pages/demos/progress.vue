<template>
  <div class="demo-page-progress">
    <breadcrumb :crumbs="['Demos', 'Wave Progress']"/>

    <div class="main-page">
      <wave-progress :type="'circle'"></wave-progress>
      <wave-progress :type="'star'"></wave-progress>
      <wave-progress :type="'roundRect'"></wave-progress>
      <wave-progress :type="'heart'"></wave-progress>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "../../components/breadcrumb";
  import WaveProgress from "../../components/waveProgress/index";

  export default {
    components: {Breadcrumb, WaveProgress}
  }
</script>

<style scoped>
  .demo-page-progress .main-page {
  }
</style>

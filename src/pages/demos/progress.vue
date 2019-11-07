<template>
  <div class="demo-page-progress">
    <breadcrumb :crumbs="['Demos', 'Wave Progress']"/>

    <div class="main-page">
      <wave-progress :type="'circle'"></wave-progress>
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

</style>

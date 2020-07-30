<template>
  <div class="demo-page-progress">
    <breadcrumb :crumbs="['Demos', 'Wave Progress']" />

    <div class="main-page">
      <wave-progress :type="'circle'" />
      <wave-progress :type="'star'" />
      <wave-progress :type="'roundRect'" />
      <wave-progress :type="'heart'" />
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../components/breadcrumb";
import WaveProgress from "../../components/waveProgress/index";

export default {
  components: { Breadcrumb, WaveProgress }
};
</script>

<template>
  <div class="demo-page-image-zoom">
    <breadcrumb :crumbs="['Demos', 'Wave Progress']" />

    <div class="main-page">
      <div class="pic-box">
        <pic-zoom :url="imgUrl" :scale="8" :scroll="true" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb";
import PicZoom from "vue-piczoom";

export default {
  components: { Breadcrumb, PicZoom },
  data() {
    return {
      imgUrl: require("@/assets/img/robot_girl.jpg")
    };
  }
};
</script>

<style lang="less">
.demo-page-image-zoom {
  .pic-box {
    width: 1024px;
    height: 733.5px;

    .magnifier-box img {
      height: 100%;
    }
  }
}

.mouse-cover-canvas:last-child {
  width: 512px !important;
  height: 366.75px !important;
}
</style>

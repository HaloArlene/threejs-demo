<template>
  <div>
    <a-breadcrumb style="margin: 12px 0">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main-page home-page">
      <diagonal-box class="intro-box" :title="title" :content="introduce" />
      <com-button
        class="start-btn"
        :text="startTxt"
        @onClick="$router.push('/dailyChallenges')"
      />
    </div>
  </div>
</template>
<script>
import ComButton from "../components/com-button";
import DiagonalBox from "../components/diagonal-box";

export default {
  components: { DiagonalBox, ComButton },
  data() {
    return {
      title: "What is this?",
      introduce:
        "This project is built to do some study and testing. And it contains a lot of demos. " +
        "There are some examples about three.js development. I wish they are helpful.",
      startTxt: "View Latest Demos"
    };
  }
};
</script>

<style lang="less">
.home-page {
  background-image: url("../assets/img/cat_background.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;

  .intro-box {
    position: absolute;
    left: 380px;
    top: 60px;
  }

  .start-btn {
    margin-top: 40px;
  }
}
</style>

<template>
  <a-layout-header class="main-header">
    <h2>Find your joy.</h2>
  </a-layout-header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.ant-layout-header.main-header {
  h2 {
    text-align: center;
    color: #ffffff;
    background-image: linear-gradient(
      to right,
      orangered,
      orange,
      gold,
      lightgreen,
      cyan,
      dodgerblue,
      mediumpurple,
      hotpink,
      orangered
    );
    animation: animate_text 60s linear infinite alternate;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
}

@keyframes animate_text {
  to {
    background-position: 2000vw;
  }
}
</style>

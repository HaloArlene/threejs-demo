<template>
  <div class="view-challenge-3 view-challenge">
    <div class="box">BUTTON</div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  .view-challenge-3 {
    background-color: skyblue;
  }

  @width: 250px;
  @height: @width / 3;

  .box {
    background: linear-gradient(to right, gold, darkorange);
    color: white;
    width: @width;
    height: @height;
    text-align: center;
    line-height: @height;
    font-size: calc(@height / 2.5);
    font-family: sans-serif;
    letter-spacing: 0.2em;
    border: 1px solid darkgoldenrod;
    border-radius: 2em;
    transform: perspective(500px) rotateY(-15deg);
    text-shadow: 6px 3px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 2px 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    position: relative;
    overflow: hidden;
  }

  .box:hover {
    transform: perspective(500px) rotateY(15deg);
    text-shadow: -6px 3px 2px rgba(0, 0, 0, 0.2);
    box-shadow: -2px 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .box::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, white, transparent);
    left: -100%;
    transition: 0.5s;
  }

  .box:hover::before {
    left: 100%;
  }
</style>

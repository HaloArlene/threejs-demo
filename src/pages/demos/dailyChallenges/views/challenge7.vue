<template>
  <div class="view-challenge">
    <div class="box">
      <span>BUTTON</span>
      <span class="top"/>
      <span class="bottom"/>
      <span class="left"/>
      <span class="right"/>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .view-challenge {
    background-color: black;
    color: silver;
  }

  .box {
    width: 9em;
    height: 3em;
    font-size: 30px;
    font-family: sans-serif;
    text-align: center;
    line-height: 3em;
    letter-spacing: 0.2em;
    position: relative;
    filter: blur(2px);
    transition: 0.5s;

    &:hover {
      filter: blur(0.2px);

      &::after, span:not(:first-child) {
        animation: aim 1s linear infinite alternate;
      }
    }

    &::after {
      content: '';
      position: absolute;
      width: 3em;
      height: 3em;
      border: 1px solid red;
      border-radius: 50%;
      left: 3em;
      filter: opacity(0);
    }

    span:not(:first-child) {
      position: absolute;
      background-color: red;
      filter: opacity(0);
    }

    span.top, span.bottom {
      width: 1px;
      height: 3em;
      left: 50%;
    }

    span.top {
      top: -3em;
    }

    span.bottom {
      bottom: -3em;
    }

    span.left, span.right {
      width: 3em;
      height: 1px;
      top: 50%;
    }

    span.left {
      left: 0;
    }

    span.right {
      right: 0;
    }
  }

  @keyframes aim {
    from {
      filter: opacity(0.2);
    }

    to {
      filter: opacity(0.8);
    }
  }
</style>

<template>
  <div class="view-challenge">
    <div class="text" data-text="BREAK">BREAK</div>
  </div>
</template>

<style lang="less" scoped>
  .view-challenge {
    background: linear-gradient(brown, sandybrown);
  }

  .text {
    font-size: 5em;
    font-family: "arial black", serif;
    position: relative;
    color: transparent;

    &:before, &:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      color: lightyellow;
      transition: 0.2s;
    }

    &:before {
      clip-path: polygon(0 0, 60% 0, 30% 100%, 0 100%);
    }

    &:after {
      clip-path: polygon(60% 0, 100% 0, 100% 100%, 30% 100%);
    }

    &:hover:before {
      left: -0.15em;
      transform: rotate(-5deg);
      top: -0.05em;
    }

    &:hover:after {
      left: 0.15em;
      transform: rotate(5deg);
      top: 0.05em;
    }
  }
</style>

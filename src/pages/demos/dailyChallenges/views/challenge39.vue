<template>
  <div class="view-challenge">
    <div class="vue">
      <span class="outer"></span>
      <span class="middle"></span>
      <span class="inner"></span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.view-challenge {
  background: radial-gradient(circle at center, lightgreen, white);
}

@outer_w: 49em;
@outer_h: 40em;
@middle_w: 32em;
@middle_h: 26em;
@inner_w: 16em;
@inner_h: 13em;

.part_border(@w, @h, @c) {
  border-top-width: @h;
  border-top-color: @c;
  border-left-width: calc(@w / 2);
  border-right-width: calc(@w / 2);
}

.vue {
  width: @outer_w;
  height: @outer_h;
  font-size: 8px;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .outer,
  .middle,
  .inner {
    position: absolute;
    border-style: solid;
    border-color: transparent;
    animation: in-and-out 3s linear infinite;
  }

  .outer {
    .part_border(@outer_w, @outer_h, #42b883);
  }

  .middle {
    .part_border(@middle_w, @middle_h, #35495e);
    animation-delay: 0.1s;
  }

  .inner {
    .part_border(@inner_w, @inner_h, white);
    animation-delay: 0.2s;
  }
}

@keyframes in-and-out {
  0%,
  5% {
    top: -100%;
  }

  15%,
  80% {
    top: 0;
    filter: opacity(1);
    transform: scale(1);
  }

  90%,
  100% {
    top: 100%;
    filter: opacity(0);
    transform: scale(0);
  }
}
</style>

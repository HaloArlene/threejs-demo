<template>
  <div class="view-challenge">
    <div class="frame">
      <div class="wall top">
        <marquee>
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </marquee>
      </div>
      <div class="wall right">
        <marquee>
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </marquee>
      </div>
      <div class="wall bottom">
        <marquee>
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </marquee>
      </div>
      <div class="wall left">
        <marquee>
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </marquee>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.frame {
  width: 100vmin;
  height: 100vmin;
  background-color: whitesmoke;
  position: relative;
  perspective: 40vmin;
}

.wall {
  overflow: hidden;
  transform-origin: 0 0;
  position: absolute;
  width: 100%;
  font-size: 75vmin;
  font-weight: bold;

  &.top {
    transform: rotate(0deg) rotateX(-90deg);
    top: 0;
    left: 0;
  }

  &.right {
    transform: rotate(90deg) rotateX(-90deg);
    top: 0;
    left: 100%;
  }

  &.bottom {
    transform: rotate(180deg) rotateX(-90deg);
    top: 100%;
    left: 100%;
  }

  &.left {
    transform: rotate(270deg) rotateX(-90deg);
    top: 100%;
    left: 0;
  }
}
</style>
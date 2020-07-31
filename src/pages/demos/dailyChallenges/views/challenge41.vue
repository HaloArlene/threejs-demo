<template>
  <div class="view-challenge">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.view-challenge {
  background-color: black;
}

.bg_delay(@bg, @dl) {
  background-color: @bg;
  animation-delay: @dl;
}

.loader {
  width: 10em;
  height: 10em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5em;
  transform: rotate(45deg);

  span {
    animation: blinking 2s linear infinite;
    transform: scale(0);

    &:nth-child(7) {
      .bg_delay(tomato, 0s);
    }

    &:nth-child(4),
    &:nth-child(8) {
      .bg_delay(gold, 0.2s);
    }

    &:nth-child(1),
    &:nth-child(5),
    &:nth-child(9) {
      .bg_delay(limegreen, 0.4s);
    }

    &:nth-child(2),
    &:nth-child(6) {
      .bg_delay(gold, 0.6s);
    }

    &:nth-child(3) {
      .bg_delay(tomato, 0.8s);
    }
  }
}

@keyframes blinking {
  0%,
  20%,
  100% {
    transform: scale(0);
  }

  40%,
  80% {
    transform: scale(1);
  }
}
</style>

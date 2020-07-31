<template>
  <div class="view-challenge">
    <div class="equalizer">
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

.up_down(@n) {
  animation: up-and-down 2s linear infinite calc(-1 * 0.4s * @n);
}

.equalizer {
  width: 10em;
  height: 10em;
  display: flex;
  justify-content: space-between;

  span {
    width: 1.5em;
    background: linear-gradient(red, yellow, green);

    &:nth-child(1) {
      .up_down(1);
    }

    &:nth-child(2) {
      .up_down(2);
    }

    &:nth-child(3) {
      .up_down(3);
    }

    &:nth-child(4) {
      .up_down(4);
    }

    &:nth-child(5) {
      .up_down(5);
    }
  }
}

@keyframes up-and-down {
  0%,
  100% {
    clip-path: inset(27% 0 0 0);
  }

  10% {
    clip-path: inset(17% 0 0 0);
  }

  20% {
    clip-path: inset(55% 0 0 0);
  }

  30% {
    clip-path: inset(30% 0 0 0);
  }

  40% {
    clip-path: inset(13% 0 0 0);
  }

  50% {
    clip-path: inset(38% 0 0 0);
  }

  60% {
    clip-path: inset(80% 0 0 0);
  }

  70% {
    clip-path: inset(21% 0 0 0);
  }

  80% {
    clip-path: inset(0% 0 0 0);
  }

  90% {
    clip-path: inset(36% 0 0 0);
  }
}
</style>

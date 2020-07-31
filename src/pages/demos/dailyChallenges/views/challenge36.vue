<template>
  <div class="view-challenge">
    <div class="book">
      <div class="page">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.view-challenge {
  background-color: paleturquoise;
}

@sw: 0.5em; /* stroke width */

.book {
  width: 15em;
  height: 10em;
  background-color: lightyellow;
  border: @sw solid cadetblue;
  border-radius: @sw;
  font-size: 20px;
  position: relative;

  .page {
    height: inherit;
    width: calc(50% + @sw + @sw / 2);
    background-color: inherit;
    border: inherit;
    border-radius: inherit;
    position: absolute;
    top: calc(-1 * @sw);
    right: calc(-1 * @sw);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8% 5%;
    animation: flip 4s linear infinite;
    transform-origin: left;
    transform-style: preserve-3d;

    span {
      display: block;
      width: 100%;
      border-top: @sw solid cadetblue;
      border-radius: inherit;
      animation: 4s linear infinite;
      transform-origin: left;
      transform: scaleX(0);
      backface-visibility: hidden;
    }

    span:nth-child(1) {
      animation-name: stroke-1;
    }

    span:nth-child(2) {
      animation-name: stroke-2;
    }

    span:nth-child(3) {
      animation-name: stroke-3;
    }

    span:nth-child(4) {
      animation-name: stroke-4;
    }

    span:nth-child(5) {
      animation-name: stroke-5;
    }
  }
}

@keyframes stroke-1 {
  0% {
    transform: scaleX(0);
  }

  10%,
  100% {
    transform: scaleX(1);
  }
}

@keyframes stroke-2 {
  10% {
    transform: scaleX(0);
  }

  20%,
  100% {
    transform: scaleX(1);
  }
}

@keyframes stroke-3 {
  20% {
    transform: scaleX(0);
  }

  30%,
  100% {
    transform: scaleX(1);
  }
}

@keyframes stroke-4 {
  30% {
    transform: scaleX(0);
  }

  40%,
  100% {
    transform: scaleX(1);
  }
}

@keyframes stroke-5 {
  40% {
    transform: scaleX(0);
  }

  50%,
  100% {
    transform: scaleX(1);
  }
}

@keyframes flip {
  55% {
    transform: rotateY(0) translateX(0) skewY(0);
  }

  70% {
    transform: rotateY(-90deg) translateX(calc(-1 * @sw / 2)) skewY(-20deg);
  }

  80%,
  100% {
    transform: rotateY(-180deg) translateX(calc(-1 * @sw)) skewY(0);
  }
}
</style>

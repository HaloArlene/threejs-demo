<template>
  <div class="view-challenge">
    <div class="loader">
      <div class="face">
        <div class="circle"></div>
      </div>
      <div class="face">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .border_top_left(@color) {
    border-top-color: @color;
    border-left-color: @color;
  }

  .circle_shadow(@color) {
    background-color: @color;
    box-shadow: 0 0 20px @color,
    0 0 40px @color,
    0 0 60px @color,
    0 0 80px @color,
    0 0 100px @color,
    0 0 0 5px rgba(255, 255, 0, 0.1);
  }

  .view-challenge {
    background-color: black;
  }

  .loader {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    position: relative;

    .face {
      position: absolute;
      border: 2px solid transparent;
      border-radius: 50%;
      animation: animate 3s linear infinite;

      .circle {
        position: absolute;
        width: 50%;
        height: 1px;
        top: 50%;
        left: 50%;
        background-color: transparent;
        transform-origin: left;

        &:before {
          position: absolute;
          top: -5px;
          right: -5px;
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }

      &:nth-child(1) {
        width: 100%;
        height: 100%;
        .border_top_left(gold);

        .circle {
          transform: rotate(-45deg);
        }

        .circle:before {
          .circle_shadow(gold);
        }
      }

      &:nth-child(2) {
        width: 70%;
        height: 70%;
        .border_top_left(lime);
        animation-direction: reverse;

        .circle {
          transform: rotate(135deg);
        }

        .circle:before {
          .circle_shadow(lime);
        }
      }
    }
  }

  @keyframes animate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>

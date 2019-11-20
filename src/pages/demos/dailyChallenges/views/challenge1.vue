<template>
  <div class="view-challenge view-challenge-1">
    <com-button :text="'Button'"></com-button>

    <div class="loader-box">
      <div class="loader">
        <span></span><span></span><span></span>
      </div>
    </div>

    <div class="battery"></div>
  </div>
</template>

<script>
  import ComButton from "../../../../components/com-button";

  export default {
    components: {ComButton},
  }
</script>

<style lang="less" scoped>
  .view-challenge-1 {
    background: linear-gradient(to bottom, teal, aqua);
  }

  .loader-box {
    display: inline-block;
    margin-left: 20px;
  }

  .loader {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @keyframes rotating {
      to {
        transform: rotateY(1turn);
      }
    }

    span {
      position: absolute;
      --diameter: calc(40% + (var(--n) - 1) * 30%);
      width: var(--diameter);
      height: var(--diameter);
      box-sizing: border-box;
      border: 10px solid dimgray;
      border-radius: 2px;
      animation: rotating linear infinite;

      &:nth-child(1) {
        --n: 1;
        animation-duration: 1s;
      }

      &:nth-child(2) {
        --n: 2;
        animation-duration: 2s;
      }

      &:nth-child(3) {
        --n: 3;
        animation-duration: 3s;
      }

      &::before, &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 50%;
        background-color: gold;
      }

      &::before {
        top: -10px;
        left: -10px;
      }

      &::after {
        bottom: -10px;
        right: -10px;
      }
    }
  }

  .battery {
    width: 6em;
    height: 3em;
    color: midnightblue;
    border: 0.5em solid currentColor;
    border-radius: 0.2em;
    font-size: 2em;
    position: relative;
    background-image: linear-gradient(to right, whitesmoke, whitesmoke);
    background-repeat: no-repeat;
    background-size: 30% 80%;
    background-position: top 0.3em left 0.3em;
    animation: charge 5s steps(8) infinite;

    &::after {
      content: '';
      position: absolute;
      width: 0.5em;
      height: 2em;
      background-color: currentColor;
      top: 0;
      right: -1em;
      border-radius: 0 0.2em 0.2em 0;
    }
  }


  @keyframes charge {
    from {
      background-size: 10% 80%;
    }

    to {
      background-size: 95% 80%;
    }
  }
</style>

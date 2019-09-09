<template>
  <div class="view-challenge-1">
    <com-button :text="'Button'" @onClick="comBtnClick"></com-button>
    <div class="loader-box">
      <div class="loader">
        <span></span><span></span><span></span>
      </div>
    </div>

  </div>
</template>

<script>
  import ComButton from "../../../../components/com-button";

  export default {
    components: {ComButton},
    methods: {
      comBtnClick() {

      }
    }
  }
</script>

<style lang="less">
  .view-challenge-1 {
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
  }
</style>

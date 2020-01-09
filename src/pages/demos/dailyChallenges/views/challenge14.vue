<template>
  <div class="view-challenge">
    <div class="loader">
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .view-challenge {
    background-color: black;
  }

  .size_delay(@n) {
    width: calc(20% + 20% * (5 - @n));
    height: calc(20% + 20% * (5 - @n));
    animation-delay: calc(0.2s * (5 - @n));
  }

  .loader {
    width: 10em;
    height: 10em;
    font-size: 28px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      position: absolute;
      background-color: hsla(0, 100%, 50%, 0.3);
      box-sizing: border-box;
      border: 0.5em solid;
      border-color: white rgba(100%, 100%, 100%, 0.2);
      animation: change-color 5s ease-in-out infinite alternate, rotating 5s ease-in-out infinite alternate;

      &:nth-child(1) {
        .size_delay(1);
      }

      &:nth-child(2) {
        .size_delay(2);
      }

      &:nth-child(3) {
        .size_delay(3);
      }

      &:nth-child(4) {
        .size_delay(4);
      }

      &:nth-child(5) {
        .size_delay(5);
      }
    }
  }

  @keyframes change-color {
    to {
      filter: hue-rotate(1turn);
    }
  }

  @keyframes rotating {
    to {
      transform: rotate(2turn);
    }
  }
</style>

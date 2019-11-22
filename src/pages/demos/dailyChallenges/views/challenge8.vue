<template>
  <div class="view-challenge">
    <div class="circle"></div>

    <div class="circle2"></div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .view-challenge {
    background-color: black;
    min-height: 400px;
  }

  .half_circle(@n, @topColor, @bottomColor, @duration) {
    width: calc(10em - (@n - 1) * 30%);
    height: calc(10em - (@n - 1) * 30%);
    border: 0.4em solid;
    border-radius: 50%;
    border-color: @topColor transparent @bottomColor transparent;
    animation: animate ease-in-out infinite alternate;
    animation-duration: @duration;
  }

  @keyframes animate {
    to {
      transform: rotate(4turn);
    }
  }

  .circle {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .half_circle(1, red, blue, 4s);

    &:before, &:after {
      content: '';
      position: absolute;
    }

    &:before {
      .half_circle(2, orange, cyan, 8s);
    }

    &:after {
      .half_circle(3, yellow, limegreen, 16s);
    }
  }

  @innerRadius: 2em;

  .circle2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(@innerRadius * 2);
    height: calc(@innerRadius * 2);
    background-color: lime;
    border-radius: 50%;
    box-shadow: 0 0 0 calc(@innerRadius - 0.4em) black, 0 0 0 @innerRadius lime;
    position: relative;
    margin-left: 200px;
  }

  .circle2::before,
  .circle2::after {
    content: '';
    position: absolute;
    width: calc(@innerRadius * 2 * 2);
    height: calc(@innerRadius * 2 * 2);
    border: 2px solid lime;
    border-radius: 50%;
    animation: pulse 2s ease-out infinite;
  }

  .circle2::after {
    animation-delay: 1s;
  }

  @keyframes pulse {
    from {
      transform: scale(1);
      filter: opacity(0.9);
    }

    to {
      transform: scale(2);
      filter: opacity(0);
    }
  }
</style>

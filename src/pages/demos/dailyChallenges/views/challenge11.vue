<template>
  <div class="view-challenge">
    <div class="books">
      <div class="book html">
        <span>HTML</span>
      </div>
      <div class="book css">
        <span>CSS</span>
      </div>
      <div class="book js">
        <span>JavaScript</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .view-challenge {
    background: linear-gradient(to bottom left, dimgray, white);
    font-size: 12px;
  }

  .books {
    display: flex;
    width: calc(12rem * 3 + 3rem * 2);
    justify-content: space-between;
    margin-top: 6rem;
  }

  .book {
    width: 12rem;
    height: 18rem;
    background: linear-gradient(navy, deeppink, tomato);
    transform: skewY(-10deg);
    box-shadow: -10px 5px 30px rgba(0, 0, 0, 0.5);
    position: relative;
    transition: 0.3s;

    &:hover {
      margin-top: -1.5rem;
    }

    &:nth-child(2) {
      top: -3rem;
    }

    &:nth-child(3) {
      top: -6rem;
    }

    &:before, span:before {
      content: '';
      position: absolute;
      width: 1.5rem;
      height: 100%;
      background: linear-gradient(navy, deeppink, tomato);
      top: 0;
      left: -1.5rem;
      transform-origin: right;
      transform: skewY(45deg);
      filter: brightness(0.6);
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1.5rem;
      background: white;
      top: -1.5rem;
      left: 0;
      transform-origin: bottom;
      transform: skewX(45deg);
      filter: brightness(0.9);
    }

    span {
      color: whitesmoke;
      font-size: 2.2rem;
      font-family: sans-serif;
      display: block;
      text-align: center;
      height: 8rem;
      margin-top: 5rem;
      padding-top: 2rem;
      box-sizing: border-box;
      text-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
      position: absolute;
      width: 100%;

      &:after {
        display: block;
        font-size: 1rem;
      }
    }

    &.html span, &.html span:before {
      background: orange;
    }

    &.css span, &.css span:before {
      background: royalblue;
    }

    &.js span, &.js span:before {
      background: gold;
    }

    &.html span:after {
      content: '<devolopment />';
    }

    &.css span:after {
      content: '.devolopment::';
    }

    &.js span:after {
      content: '{ devolopment }';
    }
  }
</style>

<template>
  <div class="view-challenge">
    <section class="four-zero-four">
      <p class="four">
        <span/>
        <span/>
        <span/>
      </p>
      <p class="zero">
        <span/>
        <span/>
        <span/>
        <span/>
      </p>
      <p class="four">
        <span/>
        <span/>
        <span/>
      </p>
    </section>
  </div>
</template>

<style lang="less" scoped>
  .view-challenge {
    background: linear-gradient(dimgray, black);
  }

  .four-zero-four p {
    width: 10em;
    height: 10em;
    display: inline-block;
    margin: 1em;
    position: relative;

    span {
      position: absolute;
      box-sizing: border-box;
      filter: opacity(0.8);
      transition: 0.3s;
    }
  }

  .four span:nth-child(1) {
    width: 20%;
    height: 80%;
    left: 10%;
    background-color: yellowgreen;
  }

  .four span:nth-child(2) {
    width: 100%;
    height: 20%;
    top: 50%;
    background-color: turquoise;
  }

  .four span:nth-child(3) {
    width: 20%;
    height: 100%;
    right: 10%;
    background-color: pink;
  }

  .zero span:nth-child(1) {
    width: 20%;
    height: 100%;
    left: 10%;
    background-color: skyblue;
  }

  .zero span:nth-child(2) {
    width: 100%;
    height: 20%;
    top: 10%;
    background-color: plum;
  }

  .zero span:nth-child(3) {
    width: 20%;
    height: 100%;
    right: 10%;
    background-color: lightcoral;
  }

  .zero span:nth-child(4) {
    width: 100%;
    height: 20%;
    bottom: 10%;
    background-color: peachpuff;
  }

  .four-zero-four:hover {
    p span {
      border: 1px solid black;
      background-color: whitesmoke;
    }

    .four span:nth-child(1) {
      left: 0;
      top: 20%;
    }

    .four span:nth-child(2) {
      top: 0;
    }

    .four span:nth-child(3) {
      right: 0;
    }

    .zero span:nth-child(1) {
      left: 0;
    }

    .zero span:nth-child(2) {
      top: 0;
    }

    .zero span:nth-child(3) {
      right: 0;
    }

    .zero span:nth-child(4) {
      bottom: 0;
    }
  }
</style>

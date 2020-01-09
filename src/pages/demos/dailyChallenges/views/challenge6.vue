<template>
  <div class="view-challenge">
    <div class="box">
      <div class="inner">
        <span>Hello World</span>
      </div>
      <div class="inner">
        <span>Hello World</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .view-challenge {
    background-color: navajowhite;
  }

  .box {
    display: flex;

    .inner {
      width: 7em;
      height: 3em;
      line-height: 3em;
      font-size: 70px;
      font-family: sans-serif;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;

      &:first-child {
        background-color: indianred;
        color: darkred;
        transform-origin: right;
        transform: perspective(1.5em) rotateY(-15deg);

        span {
          animation-delay: 2.5s;
          left: -100%;
        }
      }

      &:last-child {
        background-color: lightcoral;
        color: antiquewhite;
        transform-origin: left;
        transform: perspective(1.5em) rotateY(15deg);
      }

      span {
        position: absolute;
        animation: marquee 5s linear infinite;
      }
    }
  }

  @keyframes marquee {
    from {
      left: 100%;
    }

    to {
      left: -100%;
    }
  }
</style>

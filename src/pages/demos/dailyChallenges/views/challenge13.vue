<template>
  <div class="view-challenge">
    <div class="outer-box">
      <div class="box">
        you are my<br>
        FAVORITE
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
  .view-challenge {
    background-color: #222;
  }

  .outer-box {
    content: '';
    padding: 1em;
    border-radius: 1.4em;
    background-image: linear-gradient(60deg, aquamarine, cornflowerblue, goldenrod, hotpink, salmon, lightgreen, sandybrown, violet);
    background-size: 300%;
    animation: animate_bg 5s infinite;

    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5em;
      width: 10em;
      height: 5em;
      background-color: #111;
      border-radius: 0.5em;
      text-align: center;
      line-height: 1.5em;
      font-family: sans-serif;
      animation: animate_text 2s linear infinite alternate;
    }
  }

  @keyframes animate_bg {
    0%, 100% {
      background-position: 0, 50%;
    }

    50% {
      background-position: 100%, 50%;
    }
  }

  @keyframes animate_text {
    from {
      color: lime;
    }

    to {
      color: yellow;
    }
  }
</style>

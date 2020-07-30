<template>
  <div class="view-challenge">
    <div class="rainbow">
      <div class="bows">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bow_span_style(@n, @color) {
  width: calc(100% - 2em * (@n - 1));
  height: calc(100% - 2em * (@n - 1));
  border: 1em solid @color;
  animation-delay: calc(0.05s * @n);
  border-top-color: transparent;
  border-left-color: transparent;
}

.view-challenge {
  background: black;
}

.rainbow {
  width: 20em;
  height: 10em;
  overflow: hidden;
}

.bows {
  height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: black;
  width: 100%;
  height: 200%;
  position: relative;
  transform: rotate(225deg);

  span {
    position: absolute;
    box-sizing: border-box;
    border-radius: 50%;
    animation: rotating 3s infinite;

    &:nth-child(1) {
      .bow_span_style(1, orangered);
    }

    &:nth-child(2) {
      .bow_span_style(2, orange);
    }

    &:nth-child(3) {
      .bow_span_style(3, yellow);
    }

    &:nth-child(4) {
      .bow_span_style(4, mediumspringgreen);
    }

    &:nth-child(5) {
      .bow_span_style(5, deepskyblue);
    }

    &:nth-child(6) {
      .bow_span_style(6, mediumpurple);
    }
  }
}

@keyframes rotating {
  0%,
  20% {
    transform: rotate(0deg);
  }

  80%,
  100% {
    transform: rotate(360deg);
  }
}
</style>
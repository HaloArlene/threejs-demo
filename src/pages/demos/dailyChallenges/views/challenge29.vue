<template>
  <div class="view-challenge">
    <div class="container">
      <p>Explore</p>
      <p>Discovery</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.view-challenge {
  background-color: black;
}

.container {
  filter: contrast(10);
  background-color: black;
  overflow: hidden;
}

p {
  color: white;
  font-size: 100px;
  font-weight: bold;
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  animation: show-hide 10s infinite;
  filter: opacity(0);

  &:nth-child(1) {
    transform: translateY(50%);
    animation-direction: normal;
  }

  &:nth-child(2) {
    transform: translateY(-50%);
    animation-direction: reverse;
    animation-delay: -1s;
  }
}

@keyframes show-hide {
  0% {
    filter: opacity(0) blur(0.08em);
    letter-spacing: -0.8em;
  }

  25% {
    filter: opacity(1) blur(0.08em);
  }

  40% {
    filter: opacity(1) blur(0.24em);
  }

  40% {
    filter: opacity(0) blur(0.24em);
    letter-spacing: 0.24em;
  }
}
</style>
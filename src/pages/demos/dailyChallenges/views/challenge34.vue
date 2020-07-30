<template>
  <div class="view-challenge">
    <div class="container">
      <p>
        <span>stay</span>
        <span>hungry</span>
      </p>
      <p>
        <span>hungry</span>
        <span>stay</span>
      </p>
      <p>
        <span>stay</span>
        <span>foolish</span>
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.view-challenge {
  background-color: black;
}

.container p {
  color: white;
  font-size: 80px;
  font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  height: 1em;
  overflow: hidden;
  position: relative;
  left: -0.8em;

  &:nth-child(odd) {
    transform: skewY(-30deg) skewX(45deg) scaleY(1.3333);
  }

  &:nth-child(even) {
    transform: skewY(-30deg) scaleY(1.3333);
  }

  &:nth-child(2) {
    margin-left: 1.3em;
  }

  &:nth-child(3) {
    margin-left: 2.6em;
  }

  span {
    display: block;
    text-align: center;
    line-height: 1em;
    animation: lettering 3s infinite ease-in-out alternate;
  }
}

@keyframes lettering {
  to {
    transform: translateY(-100%);
  }
}
</style>
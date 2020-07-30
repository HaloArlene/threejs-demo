<template>
  <div class="view-challenge">
    <div class="warning">ERROR 404</div>
  </div>
</template>

<style lang="less" scoped>
.view-challenge {
  background-color: rgb(20%, 20%, 20%);
}

.warning {
  color: whitesmoke;
  font-size: 80px;
  font-family: sans-serif;
  font-weight: bold;
  position: relative;
  padding: 0.6em 0.4em;
  z-index: 1;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.2em solid transparent;
    box-sizing: border-box;
    color: orangered;
    animation: rotating 10s infinite;
    display: block;
  }

  &:before {
    border-top-color: currentColor;
    border-right-color: currentColor;
    z-index: -1;
  }

  &:after {
    border-bottom-color: currentColor;
    border-left-color: currentColor;
    box-shadow: 0.3em 0.3em 0.3em rgba(20%, 20%, 20%, 0.8);
  }
}

@keyframes rotating {
  to {
    transform: rotate(360deg);
  }
}
</style>
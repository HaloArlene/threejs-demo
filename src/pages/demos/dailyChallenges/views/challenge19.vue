<template>
  <div class="view-challenge">
    <p class="rainbow">
      web
      <span data-text="web"></span>
      <span data-text="web"></span>
      <span data-text="web"></span>
      <span data-text="web"></span>
    </p>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .view-challenge {
    background: black;
  }

  .rainbow_child(@n) {
    z-index: @n;
    height: calc(100% - 10% * @n);
    animation-delay: calc(0.8s - 0.1s * @n);
  }

  .rainbow {
    color: transparent;
    font-size: 300px;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: bold;
    line-height: 1em;
    position: relative;

    span {
      &:before, &:after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        animation: animate 0.8s infinite alternate;
        filter: opacity(0);
      }

      &:nth-child(1):before {
        color: orchid;
        .rainbow_child(1);
      }

      &:nth-child(1):after {
        color: mediumpurple;
        .rainbow_child(2);
      }

      &:nth-child(2):before {
        color: deepskyblue;
        .rainbow_child(3);
      }

      &:nth-child(2):after {
        color: cyan;
        .rainbow_child(4);
      }

      &:nth-child(3):before {
        color: mediumspringgreen;
        .rainbow_child(5);
      }

      &:nth-child(3):after {
        color: yellow;
        .rainbow_child(6);
      }

      &:nth-child(4):before {
        color: gold;
        .rainbow_child(7);
      }

      &:nth-child(4):after {
        color: tomato;
        .rainbow_child(8);
      }
    }
  }

  @keyframes animate {
    from {
      filter: opacity(0);
    }

    to {
      filter: opacity(1);
    }
  }
</style>

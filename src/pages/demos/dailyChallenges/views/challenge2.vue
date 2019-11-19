<template>
  <div class="box view-challenge">
    <div class="content">
      <h2>What is Lorem Ipsum?</h2>
      <p>Mauris volutpat risus quis nisi tempus hendrerit. Nullam nisi urna, suscipit quis risus sed, congue congue
        quam. Morbi sit amet suscipit ex. Vivamus vel nulla ac libero volutpat ultrices.</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .box {
    width: 300px;
    height: 300px;
    background: linear-gradient(-45deg,
    white 0%,
    white 25%,
    hotpink 25%,
    hotpink 50%,
    white 50%,
    white 75%,
    hotpink 75%,
    hotpink 100%);
    background-size: 10%;
    box-sizing: border-box;
    padding: 15px;
    animation: animate 2s linear infinite;

    .content {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      flex-direction: column;
      box-sizing: border-box;
      padding: 30px;
      text-align: center;
      font-family: sans-serif;

      h2 {
        color: deeppink;
      }

      p {
        color: dimgray;
      }
    }
  }

  .box,
  .box .content {
    box-shadow: 0 0 2px deeppink,
    0 0 5px rgba(0, 0, 0, 1),
    inset 0 0 5px rgba(0, 0, 0, 1);
    border-radius: 10px;
  }

  @keyframes animate {
    from {
      background-position: 0;
    }

    to {
      background-position: 10%;
    }
  }
</style>

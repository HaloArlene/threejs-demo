<template>
  <div class="view-challenge challenge-4">
    <div class="checkbox">
      <div :class="['inner', isOn ? 'active' : '']">
        <div class="toggle" @click="isOn = !isOn"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOn: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .challenge-4 {
    background-color: darkseagreen;
  }

  .checkbox,
  .checkbox .inner,
  .checkbox .inner .toggle {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkbox {
    width: 10em;
    height: 5em;
    background: linear-gradient(silver, whitesmoke);
    border-radius: 2.5em;
    font-size: 40px;
    transition: .5s;

    .inner {
      width: 8em;
      height: 3.5em;
      background: linear-gradient(dimgray, silver);
      border-radius: 2em;
      box-shadow: inset 0 0 1.5em rgba(0, 0, 0, 0.5);

      &.active {
        background: linear-gradient(green, limegreen);

        .toggle {
          left: 30%;

          &::before {
            content: 'ON';
            color: limegreen;
          }
        }
      }

      .toggle {
        width: 3.5em;
        height: 3.5em;
        background: linear-gradient(to top, silver, whitesmoke);
        border-radius: 50%;
        box-shadow: 0 0.4em 0.6em rgba(0, 0, 0, 0.2);
        position: relative;
        left: -30%;
        transition: 0.5s;
        cursor: pointer;

        &::before {
          content: 'OFF';
          position: absolute;
          width: 80%;
          height: 80%;
          background: linear-gradient(silver, whitesmoke);
          border-radius: 50%;
          text-align: center;
          line-height: calc(3.5em * 0.8);
          font-family: sans-serif;
          color: gray;
        }
      }
    }
  }
</style>

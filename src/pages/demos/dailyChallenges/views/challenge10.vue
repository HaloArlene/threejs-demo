<template>
  <div class="view-challenge">
    <div class="coffee">
      <div class="vapor">
        <span/>
        <span/>
        <span/>
        <span/>
        <span/>
      </div>
      <div class="cup"></div>
      <div class="plate"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .view-challenge {
    background-color: brown;
  }

  .coffee {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(9em + 1em + 2em);
    position: relative;

    .cup {
      width: 10em;
      height: 9em;
      background-color: white;
      border-bottom-left-radius: 1.5em;
      border-bottom-right-radius: 1.5em;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2em;
        background-color: chocolate;
        border: 0.5em solid white;
        box-sizing: border-box;
        border-radius: 50%;
        top: -1em;
        box-shadow: inset 0 0 1em rgba(0, 0, 0, 0.5);
      }

      &:after {
        content: '';
        position: absolute;
        width: 3em;
        height: 3.5em;
        border: 0.8em solid white;
        border-radius: 50%;
        top: 20%;
        left: 80%;
      }
    }

    .plate {
      width: 16em;
      height: 1em;
      background-color: white;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      position: absolute;
      bottom: -1px;
    }

    .vapor {
      width: 7em;
      height: 2em;
      display: flex;
      justify-content: space-between;

      span {
        width: 0.1em;
        min-width: 1px;
        background-color: white;
        animation: evaporation 2s linear infinite;
        filter: opacity(0);

        &:nth-child(1) {
          animation-delay: 0.5s;
        }

        &:nth-child(2) {
          animation-delay: 0.1s;
        }

        &:nth-child(3) {
          animation-delay: 0.3s;
        }

        &:nth-child(4) {
          animation-delay: 0.4s;
        }

        &:nth-child(5) {
          animation-delay: 0.2s;
        }
      }
    }
  }

  @keyframes evaporation {
    from {
      transform: translateY(0);
      filter: opacity(1) blur(0.2em);
    }

    to {
      transform: translateY(-4em);
      filter: opacity(0) blur(0.4em);
    }
  }
</style>

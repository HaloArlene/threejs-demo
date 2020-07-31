<template>
  <div class="view-challenge">
    <div class="pencil">
      <span class="taper"></span>
      <span class="barrel">Think Different</span>
      <span class="eraser"></span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.view-challenge {
  background-color: lightskyblue;
}

.pencil {
  position: absolute;
  width: 50em;
  height: 3.5em;
  font-size: 12px;
  filter: drop-shadow(5px 10px 3px gray);

  .barrel {
    position: absolute;
    width: 40em;
    left: 4em;
    background-color: green;
    border-top: 1em solid forestgreen;
    border-bottom: 1em solid darkgreen;
    color: silver;
    line-height: 1.5em;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .taper::before,
  .taper::after {
    content: "";
    position: absolute;
    left: -4em;
    border-style: solid;
    border-width: calc(3.5em / 2) 4em;
  }

  .taper::before {
    border-color: transparent burlywood transparent transparent;
  }

  .taper::after {
    border-color: transparent black transparent transparent;
    transform: scale(0.3);
  }

  .eraser {
    position: absolute;
    right: 0;
    width: 6em;
    height: 3.5em;
    background-color: lightpink;
    border-top: 1em solid pink;
    border-bottom: 1em solid lightcoral;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    display: block;

    &:before {
      content: "";
      position: absolute;
      top: -1em;
      left: 0;
      width: 1.5em;
      height: 3.5em;
      background-color: silver;
      border-top: 1em solid lightgray;
      border-bottom: 1em solid gray;
    }
  }
}
</style>

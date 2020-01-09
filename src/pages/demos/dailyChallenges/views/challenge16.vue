<template>
  <div class="view-challenge">
    <ul class="menu">
      <li data-text="New Game">New Game</li>
      <li data-text="Load Game">Load Game</li>
      <li data-text="Options">Options</li>
      <li data-text="Exit">Exit</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
  .view-challenge {
    background-color: black;
  }

  .menu {
    padding: 0;

    li {
      list-style-type: none;
      color: transparent;
      font-size: 3em;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      line-height: 1em;
      width: 7em;
      border-top: 1px solid transparent;
      position: relative;
      margin: 0.5em;
      transition: 0.3s;

      &:before, &:after {
        content: attr(data-text);
        position: absolute;
        top: -0.5em;
        left: 0;
        width: 100%;
        color: silver;
        transition: 0.3s ease-out;
      }

      &:before {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
      }

      &:after {
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
      }

      &:hover {
        border-top: 1px solid yellow;

        &:before, &:after {
          color: yellow;
          transition: left 0.3s ease-out;
          transition-delay: 0.2s;
        }
      }

      &:nth-child(odd):hover:before, &:nth-child(even):hover:after {
        left: -0.15em;
      }

      &:nth-child(even):hover:before, &:nth-child(odd):hover:after {
        left: 0.15em;
      }
    }
  }
</style>

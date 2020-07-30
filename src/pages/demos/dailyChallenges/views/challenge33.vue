<template>
  <div class="view-challenge">
    <nav>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
</template>

<style lang="less" scoped>
.view-challenge {
  background-color: black;
}

@time_slot_length: 0.1s;
@t1x: @time_slot_length;
@t2x: calc(@time_slot_length * 2);
@t3x: calc(@time_slot_length * 3);
@t4x: calc(@time_slot_length * 4);
@blue_color: dodgerblue;

nav ul {
  padding: 0;

  li {
    color: white;
    list-style-type: none;
    font-family: sans-serif;
    text-transform: uppercase;
    width: 8em;
    height: 3em;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.1em;
    text-align: center;
    line-height: 3em;
    letter-spacing: 0.1em;
    position: relative;
    transition: @t4x; /* duration 4x */
    margin: 1em;

    &:hover {
      color: @blue_color;
      animation: pulse ease-out 1s @t4x; /* delay 4x */
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-radius: 0.1em;
      visibility: hidden;
    }

    &:before {
      top: 0;
      left: 0;
      border-top: 1px solid @blue_color;
      border-right: 1px solid @blue_color;
      transition: height linear @t1x @t2x, /* delay 2x */ width linear @t1x @t3x,
        /* delay 3x */ visibility 0s @t4x; /* delay 4x */
    }

    &:after {
      bottom: 0;
      right: 0;
      border-bottom: 1px solid @blue_color;
      border-left: 1px solid @blue_color;
      transition: height linear @t1x, width linear @t1x @t1x,
        /* delay 1x */ visibility 0s @t2x; /* delay 2x */
    }

    &:hover:before,
    &:hover:after {
      width: 100%;
      height: 100%;
      visibility: visible;
    }

    &:hover:before {
      transition: visibility 0s, width linear @t1x, height linear @t1x @t1x; /* delay 1x */
    }

    &:hover:after {
      transition: visibility 0s @t2x, /* delay 2x */ width linear @t1x @t2x,
        /* delay 2x */ height linear @t1x @t3x; /* delay 3x */
    }
  }
}

@keyframes pulse {
  from {
    /* rgb(30, 144, 255) == dodgerblue */
    box-shadow: 0 0 rgba(30, 144, 255, 0.5);
  }

  to {
    box-shadow: 0 0 0 1em rgba(30, 144, 255, 0);
  }
}
</style>
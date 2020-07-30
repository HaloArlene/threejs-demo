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
    <nav>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
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
  background: linear-gradient(white, silver);
}

@li_h: 3em;

.nav_li_style(@rate, @bgcolor) {
  width: calc(@li_h * @rate);
  background-color: @bgcolor;

  &:before,
  &:after {
    background-color: @bgcolor;
  }
}

nav {
  ul {
    padding: 0;

    li {
      list-style-type: none;
      color: white;
      font-family: sans-serif;
      text-align: center;
      position: relative;
      margin: 2em;
      height: @li_h;
      line-height: @li_h;
      z-index: 2;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        filter: opacity(0);
        transition: 0.3s;
        display: block;
        z-index: -1;
      }

      &:before {
        transform: rotate(60deg) translateX(calc(@li_h * -2));
      }

      &:after {
        transform: rotate(-60deg) translateX(calc(@li_h * 2));
        transition-delay: 0.1s;
      }

      &:hover {
        &:before {
          filter: opacity(1);
          transform: rotate(60deg) translateX(0);
        }
      }

      &:hover:after {
        filter: opacity(1);
        transform: rotate(-60deg) translateX(0);
      }
    }
  }

  &:nth-child(1) ul li {
    .nav_li_style(1.5, black);
  }

  &:nth-child(2) ul li {
    .nav_li_style(1.732, brown);
  }

  &:nth-child(3) ul li {
    .nav_li_style(2, green);
  }
}
</style>
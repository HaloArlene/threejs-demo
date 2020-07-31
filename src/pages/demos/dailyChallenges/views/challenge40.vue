<template>
  <div class="view-challenge">
    <nav>
      <ul>
        <li>
          <span>h</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
        </li>
        <li>
          <span>p</span>
          <span>r</span>
          <span>o</span>
          <span>d</span>
          <span>u</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </li>
        <li>
          <span>s</span>
          <span>e</span>
          <span>v</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
        </li>
        <li>
          <span>c</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="less" scoped>
.view-challenge {
  background: linear-gradient(to right bottom, dimgray, black);
}

.tr_delay(@n) {
  color: #000;
  transition-delay: calc(80ms * @n + 10ms);

  &:before {
    width: 70%;
    background-color: rgba(256, 256, 256, 0.2);
    transform: rotate(-25deg);
    transition-delay: calc(80ms * @n);
  }
}

ul {
  padding: 0;

  li {
    list-style-type: none;
    border: 2px solid transparent;
    border-left-color: silver;
    padding-left: 2em;
    transition: 500ms;
    margin: 1em 0;
    text-align: center;

    span {
      color: white;
      font-size: 30px;
      font-family: monospace;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      position: relative;
      transition: 500ms;

      &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 0%;
        transition: 500ms;
        top: 1px;
        left: 1px;
      }
    }

    &:hover {
      border-left-color: white;

      span {
        &:nth-child(1) {
          .tr_delay(1);
        }

        &:nth-child(2) {
          .tr_delay(2);
        }

        &:nth-child(3) {
          .tr_delay(3);
        }

        &:nth-child(4) {
          .tr_delay(4);
        }

        &:nth-child(5) {
          .tr_delay(5);
        }

        &:nth-child(6) {
          .tr_delay(6);
        }

        &:nth-child(7) {
          .tr_delay(7);
        }

        &:nth-child(8) {
          .tr_delay(8);
        }
      }
    }
  }
}
</style>

<template>
  <div class="view-challenge">
    <nav>
      <ul>
        <li><span>Home</span></li>
        <li><span>Products</span></li>
        <li><span>Services</span></li>
        <li><span>Contact</span></li>
      </ul>
    </nav>


    <div class="box">
      <div class="content">
        <h2>What is Lorem Ipsum?</h2>
        <p>Mauris volutpat risus quis nisi tempus hendrerit. Nullam nisi urna, suscipit quis risus sed, congue congue
          quam. Morbi sit amet suscipit ex. Vivamus vel nulla ac libero volutpat ultrices.</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .view-challenge {
    background: linear-gradient(to right bottom, gold, chocolate);
  }

  .box {
    width: 300px;
    height: 300px;
    background: linear-gradient(-45deg, white 0%, white 25%, hotpink 25%, hotpink 50%, white 50%, white 75%, hotpink 75%, hotpink 100%);
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

    &, .content {
      box-shadow: 0 0 2px deeppink,
      0 0 5px rgba(0, 0, 0, 1),
      inset 0 0 5px rgba(0, 0, 0, 1);
      border-radius: 10px;
    }
  }

  @keyframes animate {
    from {
      background-position: 0;
    }

    to {
      background-position: 10%;
    }
  }

  @x: 5em;
  @y: 1.5em;
  @d: calc(@x * 1.2);

  nav {
    ul {
      list-style-type: none;
      padding: 0;

      li {
        font-size: 40px;
        font-family: sans-serif;
        background-color: white;
        border: 2px solid black;
        letter-spacing: 0.1em;
        width: @x;
        height: @y;
        line-height: @y;
        position: relative;
        overflow: hidden;
        margin: 0.5em;

        &:before {
          content: '';
          position: absolute;
          height: @y;
          width: @y;
          background-color: black;
          border-radius: 50%;
          top: 0;
          left: calc(-1 * @y / 2);
          transition: 0.5s ease-out;
        }

        &:hover:before {
          height: @d;
          width: @d;
          top: calc(-1 * @d / 2 + @y / 2);
          left: calc(-1 * @d / 2 + @x / 2);
        }

        span {
          color: white;
          mix-blend-mode: difference;
        }
      }
    }
  }
</style>

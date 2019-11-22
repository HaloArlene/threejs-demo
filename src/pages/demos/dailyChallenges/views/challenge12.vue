<template>
  <div class="view-challenge">
    <div class="card">
      <h2>Development Skills</h2>
      <p class="skill html">
        <span>HTML</span>
        <span class="level">90%</span>
      </p>
      <p class="skill css">
        <span>CSS</span>
        <span class="level">95%</span>
      </p>
      <p class="skill javascript">
        <span>JavaScript</span>
        <span class="level">80%</span>
      </p>
      <p class="skill svg">
        <span>SVG</span>
        <span class="level">60%</span>
      </p>
      <p class="skill canvas">
        <span>Canvas</span>
        <span class="level">75%</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .view-challenge {
    background: linear-gradient(dimgray, silver, silver, dimgray);
  }

  .card {
    width: 400px;
    background: linear-gradient(#333, dimgray);
    color: white;
    box-sizing: border-box;
    padding: 20px;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

    h2 {
      text-transform: uppercase;
      text-align: center;
      color: #fff;
    }

    .skill {
      height: 50px;

      &:hover {
        background-color: #333;
      }

      span {
        display: block;
      }

      .level {
        text-align: right;
        transform: translateY(-1em);
        position: relative;

        &:after {
          content: '';
          position: absolute;
          top: 1.2em;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid mediumspringgreen;
          border-radius: 0.2em;
          background-image: linear-gradient(to right, mediumspringgreen, mediumspringgreen);
          background-repeat: no-repeat;
          background-position: top 1px left 1px;
        }
      }

      &.skill.html .level:after {
        background-size: 90% 1em;
      }

      &.css .level:after {
        background-size: 95% 1em;
      }

      &.javascript .level:after {
        background-size: 80% 1em;
      }

      &.svg .level:after {
        background-size: 60% 1em;
      }

      &.canvas .level::after {
        background-size: 75% 1em;
      }
    }
  }
</style>

<template>
  <div class="view-challenge">
    <div class="heart">
      <!-- line 1 -->
      <span/>
      <span class="dot"/>
      <span class="dot"/>
      <span/>
      <span/>
      <span/>
      <span class="dot"/>
      <span class="dot"/>
      <span/>

      <!-- line 2 -->
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>

      <!-- line 3 -->
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>

      <!-- line 4 -->
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>

      <!-- line 5 -->
      <span/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span/>

      <!-- line 6 -->
      <span/>
      <span/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span/>
      <span/>

      <!-- line 7 -->
      <span/>
      <span/>
      <span/>
      <span class="dot"/>
      <span class="dot"/>
      <span class="dot"/>
      <span/>
      <span/>
      <span/>

      <!-- line 8 -->
      <span/>
      <span/>
      <span/>
      <span/>
      <span class="dot"/>
      <span/>
      <span/>
      <span/>
      <span/>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .view-challenge {
    background: linear-gradient(lightpink, white);
  }

  .heart {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(9, 1fr);

    & > * {
      width: 1em;
      height: 1em;
      font-size: 30px;
    }

    .dot {
      background-color: red;
      animation: animate 5s infinite ease-out;
      filter: opacity(0);

      &:nth-of-type(2n) {
        animation-delay: 0.2s;
      }

      &:nth-of-type(3n) {
        animation-delay: 0.3s;
      }

      &:nth-of-type(4n) {
        animation-delay: 0.4s;
      }

      &:nth-of-type(5n) {
        animation-delay: 0.5s;
      }

      &:nth-of-type(6n) {
        animation-delay: 0.6s;
      }

      &:nth-of-type(7n) {
        animation-delay: 0.7s;
      }

      &:nth-of-type(8n) {
        animation-delay: 0.8s;
      }

      &:nth-of-type(9n) {
        animation-delay: 0.9s;
      }

      &:nth-of-type(10n) {
        animation-delay: 1.0s;
      }

      &:nth-of-type(11n) {
        animation-delay: 1.1s;
      }
    }
  }

  @keyframes animate {
    0% {
      filter: opacity(0);
      transform: translateY(-10em);
    }

    25%, 75% {
      filter: opacity(1);
      transform: translateY(0);
    }

    100% {
      filter: opacity(0);
      transform: translateY(10em);
    }
  }
</style>

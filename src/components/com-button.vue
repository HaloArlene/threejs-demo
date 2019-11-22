<template>
  <button class="com-button" @click="handleClick">
    <span v-for="(char, index) in chars" :key="index" :data-text="char">{{ char }}</span>
  </button>
</template>

<script>
  export default {
    props: ['text'],
    data() {
      return {
        chars: this.text.split('')
      }
    },
    methods: {
      handleClick(val) {
        this.$emit('onClick', val);
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/styles/variables.less";

  .com-button {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-radius: 5px;
    border: none;
    font-family: sans-serif;
    overflow: hidden;
    text-align: center;
    background-color: deeppink;
    cursor: pointer;
    outline: none;
    transition: 0.5s;

    span {
      display: inline-block;
      color: white;
      font-size: 16px;
      transition: 0.5s;

      margin-right: 3px;

      &:last-child {
        margin-right: 0;
      }

      &:nth-child(odd) {
        transform: translateY(-100%);
      }

      &:nth-child(even) {
        transform: translateY(100%);
      }

      &::before {
        content: attr(data-text);
        position: absolute;
        color: @white;
      }

      &:nth-child(odd)::before {
        transform: translateY(100%);
      }

      &:nth-child(even)::before {
        transform: translateY(-100%);
      }
    }

    &:hover {
      span {
        transform: translateY(0);
      }

      background-color: chocolate;
    }
  }
</style>

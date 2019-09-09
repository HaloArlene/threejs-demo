<template>
  <div>
    <a-breadcrumb style="margin: 12px 0">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main-page">
      <p>This project is built to do some study and testing.</p>
      <p>There are some interesting things.
        <com-button :text="'Get Started'" @onClick="go"/>
      </p>
    </div>
  </div>
</template>
<script>
  import ComButton from "../components/com-button";

  export default {
    components: {ComButton},
    data() {
      return {}
    },
    methods: {
      go() {
        this.$router.push('/line')
      }
    }
  }
</script>

<style>
  .main-page p {
    font-size: 16px;
    font-weight: bold;
  }
</style>

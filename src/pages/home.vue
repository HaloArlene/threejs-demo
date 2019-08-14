<template>
  <div>
    <a-breadcrumb style="margin: 12px 0">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main-page">
      <p>This project is built to do some study and testing.</p>
      <p>There are some interesting things. <a-button type="primary" @click="go">Get Started</a-button></p>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            go() {
                this.$router.push('/i18nDemo')
            }
        }
    }
</script>

<style>
</style>

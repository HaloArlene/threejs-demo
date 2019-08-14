<template>
  <div id="app">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <sider/>
      <a-layout>
        <top-header/>
        <a-layout-content style="margin: 0 16px">
          <router-view/>
        </a-layout-content>
        <layout-footer/>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
    import topHeader from './components/top-header'
    import sider from './components/sider'
    import layoutFooter from './components/layout-footer'

    export default {
        name: 'App',
        components: {sider, topHeader, layoutFooter},
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, .2);
    margin: 16px;
  }
</style>

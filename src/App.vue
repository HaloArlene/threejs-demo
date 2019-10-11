<template>
  <div id="app">
    <a-layout id="components-layout-demo-side">
      <sider/>
      <a-layout class="main-layout">
        <com-header/>
        <a-layout-content style="margin: 0 16px">
          <router-view/>
        </a-layout-content>
        <com-footer/>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  import ComHeader from './components/com-header'
  import sider from './components/sider'
  import ComFooter from './components/com-footer'

  export default {
    name: 'App',
    components: {sider, ComHeader, ComFooter},
  }
</script>

<style lang="less">
  @import "./assets/styles/common";
</style>

<template>
  <a-layout-sider
    collapsible
    v-model="collapsed">
    <div class="logo"/>
    <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
      <a-menu-item key="1" @click="routeTo('/home')">
        <a-icon type="home"/><span>Home</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="tags"/><span>Demos</span></span>
        <a-menu-item key="1-1" @click="routeTo('/i18nDemo')">Vue-I18n Demo</a-menu-item>
        <a-menu-item key="1-2" @click="routeTo('/vuexDemo')">Vuex Demo</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="experiment"/><span>Three</span></span>
        <a-menu-item key="2-1" @click="routeTo('/meshGrid')">Mesh Grid</a-menu-item>
        <a-menu-item key="2-2" @click="routeTo('/animationDemo')">Animation Demo</a-menu-item>
        <a-menu-item key="2-3" @click="routeTo('/cubeDemo')">Cube Demo</a-menu-item>
        <a-menu-item key="2-4" @click="routeTo('/line')">Line</a-menu-item>
        <a-menu-item key="2-5" @click="routeTo('/modelRender')">Model Render</a-menu-item>
        <a-menu-item key="2-6" @click="routeTo('/light1')">Light</a-menu-item>
        <a-menu-item key="2-7" @click="routeTo('/texture')">Texture</a-menu-item>
      </a-sub-menu>
      <a-sub-menu
        key="sub3">
        <span slot="title"><a-icon type="team"/><span>Team</span></span>
        <a-menu-item key="3-1">Team 1</a-menu-item>
        <a-menu-item key="3-2">Team 2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <a-icon type="file"/>
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
    export default {
        name: "sider",
        data() {
            return {
                collapsed: false,
            }
        },
        methods: {
            routeTo(path) {
                this.$router.push(path);
            }
        }
    }
</script>

<style scoped>

</style>

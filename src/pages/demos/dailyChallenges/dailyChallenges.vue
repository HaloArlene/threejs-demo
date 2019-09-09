<template>
  <div class="page-daily-challenges">
    <breadcrumb :crumbs="['Three', 'Daily Challenges']"/>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu theme="light" mode="inline" :defaultSelectedKeys="[0]" :selectedKeys="selectedKeys"
                @click="clickItem">
          <a-menu-item v-for="(item, index) in challenges" :key="index">{{ item }}</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content>
          <div class="main-page">
            <component :is="activeView"></component>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  import Breadcrumb from "../../../components/breadcrumb";
  import ComButton from "../../../components/com-button";
  import Challenge1 from "./views/challenge1";

  export default {
    components: {Breadcrumb, ComButton, Challenge1},
    data() {
      return {
        selectedKeys: [0],
        challenges: ['Challenge 1'],
        activeView: 'Challenge1',
      }
    },
    methods: {
      clickItem({item, key, keyPath}) {
        this.selectedKeys = [key];
      },
    }
  }
</script>

<style scoped>


</style>

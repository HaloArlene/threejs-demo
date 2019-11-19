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
  import Challenges from './views';

  export default {
    components: {Breadcrumb, ComButton, ...Challenges},
    data() {
      const challengeCount = 6; //challenge个数
      let challenges = [], views = [];
      for (let i = 0; i < challengeCount; i++) {
        challenges.push(`Challenge ${i + 1}`);
        views.push(`Challenge${i + 1}`);
      }
      return {
        selectedKeys: [0],
        challenges,
        views,
        activeView: 'Challenge1',
      }
    },
    methods: {
      clickItem({item, key, keyPath}) {
        this.selectedKeys = [key];
        this.activeView = this.views[key];
      },
    }
  }
</script>

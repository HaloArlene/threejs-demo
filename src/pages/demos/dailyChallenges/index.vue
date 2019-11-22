<template>
  <div class="page-daily-challenges">
    <breadcrumb :crumbs="['Three', 'Daily Challenges']"/>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu theme="light" mode="inline" :selectedKeys="selectedKeys"
                :openKeys="openKeys" @click="clickItem" @openChange="onOpenChange">
          <a-sub-menu v-for="subMenu in challenges" :key="subMenu.key">
            <span slot="title">{{ subMenu.name }}</span>
            <a-menu-item v-for="item in subMenu.children" :key="item.view">{{ item.name }}</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <div class="main-page">
          <component :is="activeView"></component>
        </div>
      </a-layout-content>
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
      const challengeCount = 20; //challenge个数
      const subMenuCount = Math.ceil(challengeCount / 10);
      let challenges = [];
      for (let i = 0; i < subMenuCount; i++) {
        let list = [];
        for (let j = i * 10; j < (i + 1) * 10 && j < challengeCount; j++) {
          list.push({
            name: `Challenge ${j + 1}`,
            view: `Challenge${j + 1}`
          });
        }
        let subMenuName = '';
        if (i < subMenuCount - 1) {
          subMenuName = `Challenge ${i * 10 + 1}-${(i + 1) * 10}`;
        } else {
          subMenuName = `Challenge ${i * 10 + 1}-${challengeCount}`;
        }
        challenges.push({
          name: subMenuName,
          key: 'submenu' + i,
          children: list
        });
      }
      return {
        openKeys: ['submenu0'],
        selectedKeys: ['Challenge1'],
        challenges,
        activeView: 'Challenge1',
      }
    },
    methods: {
      clickItem({item, key, keyPath}) {
        this.selectedKeys = [key];
        this.activeView = key;
      },
      onOpenChange(openKeys) {
        const subMenuKeys = this.challenges.map(sub => sub.key);
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (subMenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      }
    }
  }
</script>

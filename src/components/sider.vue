<template>
  <a-layout-sider class="main-sider" collapsible v-model="collapsed">
    <div class="logo"></div>
    <a-menu theme="dark" :defaultSelectedKeys="['home']" :selectedKeys="selectedKeys"
            :openKeys="openKeys" mode="inline" @openChange="onOpenChange">
      <template v-for="menu in menuConfig">
        <a-menu-item v-if="!menu.children" :key="menu.key" @click="routeTo(menu.path)">
          <a-icon :type="menu.icon"></a-icon>
          <span>{{ menu.title }}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="menu.key">
          <span slot="title">
            <a-icon :type="menu.icon"></a-icon>
            <span>{{ menu.title }}</span>
          </span>
          <a-menu-item v-for="item in menu.children" :key="item.key"
                       @click="routeTo(item.path)">{{ item.title }}
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
  export default {
    data() {
      const menuConfig = [
        {
          key: 'home', path: '/home', icon: 'home', title: 'Home'
        },
        {
          key: 'three', path: '/three', icon: 'experiment', title: 'Three', children: [
            {path: '/line', title: 'Line', key: 'line'},
            {path: '/meshGrid', title: 'Grid', key: 'meshGrid'},
            {path: '/geometries', title: 'Geometries', key: 'geometries'},
            {path: '/material', title: 'Material', key: 'material'},
            {path: '/shader', title: 'Shader', key: 'shader'},
            {path: '/animation', title: 'Animation', key: 'animation'},
            {path: '/animation2', title: 'Animation 2', key: 'animation2'},
            {path: '/light1', title: 'Light', key: 'light1'},
            {path: '/cube', title: 'Cube', key: 'cube'},
            {path: '/modelRender', title: 'Model Render', key: 'modelRender'},
          ]
        },
        {
          key: 'demos', path: '/demos', icon: 'tags', title: 'Demos', children: [
            {path: '/i18nDemo', title: 'Vue-I18n Demo', key: 'i18nDemo'},
            {path: '/vuexDemo', title: 'Vuex Demo', key: 'vuexDemo'},
            {path: '/comments', title: 'Comments Demo', key: 'comments'},
            {path: '/dailyChallenges', title: 'Daily Challenges', key: 'dailyChallenges'},
            {path: '/editableDiv', title: 'Editable Div', key: 'editableDiv'},
            {path: '/progress', title: 'Progress', key: 'progress'},
          ]
        },
      ];
      const subMenuKeys = menuConfig.map(sub => sub.key);
      const keyMap = menuConfig.map(menu => {
        if (!menu.children) {
          const {path, key} = menu;
          return [{path, key}];
        } else {
          return menu.children.map(item => ({path: item.path, key: item.key}));
        }
      }).reduce((a1, a2) => a1.concat(a2));
      return {
        menuConfig,
        keyMap,
        subMenuKeys,
        collapsed: false,
        openKeys: ['three'],
        selectedKeys: ['home']
      }
    },
    watch: {
      '$route.path': function (val, oldVal) {
        const item = this.keyMap.find(k => k.path === val);
        this.selectedKeys = [item.key];
      }
    },
    methods: {
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.subMenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
      routeTo(path) {
        this.$router.push(path);
      },
    }
  }
</script>

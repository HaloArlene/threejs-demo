<template>
  <a-layout-sider collapsible v-model="collapsed">
    <div class="logo"></div>
    <a-menu theme="dark" :defaultSelectedKeys="['sub0']" :selectedKeys="selectedKeys"
            :defaultOpenKeys="['sub1']" mode="inline" @click="clickItem">
      <template v-for="(menu, menuIndex) in menuConfig">
        <a-menu-item v-if="!menu.children" :key="menu.key" @click="routeTo(menu.path)">
          <a-icon :type="menu.icon"></a-icon>
          <span>{{ menu.title }}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="menu.key">
          <span slot="title">
            <a-icon :type="menu.icon"></a-icon>
            <span>{{ menu.title }}</span>
          </span>
          <a-menu-item v-for="(item, itemIndex) in menu.children" :key="`${menuIndex}-${itemIndex}`"
                       @click="routeTo(item.path)">{{ item.title }}
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
  export default {
    name: "sider",
    data() {
      return {
        collapsed: false,
        selectedKeys: ['sub0'],
        menuConfig: [
          {
            key: 'sub0', path: '/home', icon: 'home', title: 'Home'
          },
          {
            key: 'sub1', icon: 'experiment', title: 'Three', children: [
              {path: '/line', title: 'Line'},
              {path: '/meshGrid', title: 'Grid'},
              {path: '/geometries', title: 'Geometries'},
              {path: '/material', title: 'Material'},
              {path: '/shader', title: 'Shader'},
              {path: '/animation', title: 'Animation'},
              {path: '/animation2', title: 'Animation 2'},
              {path: '/texture', title: 'Texture'},
              {path: '/light1', title: 'Light'},
              {path: '/cube', title: 'Cube'},
              {path: '/modelRender', title: 'Model Render'},
            ]
          },
          {
            key: 'sub2', icon: 'tags', title: 'Demos', children: [
              {path: '/i18nDemo', title: 'Vue-I18n Demo'},
              {path: '/vuexDemo', title: 'Vuex Demo'},
              {path: '/dailyChallenges', title: 'Daily Challenges'}
            ]
          },
        ]
      }
    },
    methods: {
      routeTo(path) {
        this.$router.push(path);
      },
      clickItem({item, key, keyPath}) {
        this.selectedKeys = [key];
      },
    }
  }
</script>

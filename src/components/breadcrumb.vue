<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item, index) in crumbs" :key="index">{{ item }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
  export default {
    props: ['crumbs']
  }
</script>

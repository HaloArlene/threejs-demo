<template>
  <div>
    <a-breadcrumb style="margin: 12px 0">
      <a-breadcrumb-item>Three</a-breadcrumb-item>
      <a-breadcrumb-item>Mesh Grid</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main-page">
      <div id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "meshGrid",
        data() {
            return {
                renderer: null,
                width: 0,
                height: 0,

            };
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>

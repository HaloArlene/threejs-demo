<template>
    <div>
      <a-breadcrumb style="margin: 12px 0">
        <a-breadcrumb-item>Demos</a-breadcrumb-item>
        <a-breadcrumb-item>Vuex Demo</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="main-page">
        <h3>{{ $store.state.count }}</h3>
        <section>
          <div>
            <label>
              <button @click="handleAdd(10)">{{ $t('add') }}</button>
              <button @click="handleReduce(10)">{{ $t('reduce') }}</button>
            </label>
          </div>
          <div style="margin-top: 10px">
            <label>
              <button @click="handleAsyncAdd(10)">异步增加</button>
              <button @click="handleAsyncReduce(10)">异步减少</button>
            </label>
          </div>
        </section>
      </div>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from "vuex";

    export default {
        name: "vuexDemo",
        methods: {
            ...mapMutations({
                handleAdd: 'addCount',
                handleReduce: 'reduceCount'
            }),
            ...mapActions({
                handleAsyncAdd: 'actionAddCount',
                handleAsyncReduce: 'actionReduceCount'
            })
            // handleAdd(n) {
            //     this.$store.commit('addCount', n)
            // },
            // handleReduce(n) {
            //     this.$store.commit('reduceCount', n)
            // },
            // handleAsyncAdd(n) {
            //     this.$store.dispatch('actionAddCount', n)
            // },
            // handleAsyncReduce(n) {
            //     this.$store.dispatch('actionReduceCount', n)
            // }
        }
    }
</script>

<style scoped>

</style>

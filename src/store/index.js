import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 0
};
const mutations = {
  addCount(state, n = 0) {
    return (state.count += n)
  },
  reduceCount(state, n = 0) {
    return (state.count -= n)
  }
};
const actions = {
  actionAddCount(context, n = 0) {
    return context.commit('addCount', n)
  },
  actionReduceCount(context, n = 0) {
    return context.commit('reduceCount', n)
  }
};
const getters = {
  getterCount(state) {
    return (state.count += 10)
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

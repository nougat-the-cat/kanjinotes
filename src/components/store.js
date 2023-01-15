import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filteredData: []
  },
  mutations: {
    setFilteredData (state, data) {
      state.filteredData = data
    }
  },
  actions: {
    updateFilteredData ({ commit }, data) {
      commit('setFilteredData', data)
    }
  }
})

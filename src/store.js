import { createStore } from 'vuex'

export const store = createStore({
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
  },
})

export default store
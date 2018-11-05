// スイッチ情報用のストア
export default {
  namespaced: true,
  state: {
    selectedSwitches: {},
  },
  getters: {
    detail: state => state.selectedSwitches,
  },
  mutations: {
    set(state, { selectedSwitches }) {
      state.selectedSwitches = selectedSwitches
    },
    clear(state) {
      state.selectedSwitches = {}
    },
  },
  actions: {
    load({ commit }, selectedSwitches) {
      commit('set', { selectedSwitches })
    },
    destroy({ commit }) {
      commit('clear')
    }
  }
}

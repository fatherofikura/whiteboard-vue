// リストのチェック情報用のストア
export default {
  namespaced: true,
  state: {
    checkedList: [],
  },
  getters: {
    checkedList(state) { return state.checkedList },
  },
  mutations: {
    setCheckedList(state, payload) {
      state.checkedList = payload.checkedList
    },
    clearCheckedList(state) {
      state.checkedList = []
    }
  },
  actions: {
    doUpdate({ commit }, checkedList) {
      commit('setCheckedList', { checkedList })
    },
    doClear({ commit }) {
      commit('clearCheckedList')
    },
  }
}

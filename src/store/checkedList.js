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
    // メッセージを変更するミューテーション
    setCheckedList(state, payload) {
      state.checkedList = payload.checkedList
    }
  },
  actions: {
    doUpdate({ commit }, checkedList) {
      commit('setCheckedList', { checkedList })
    }
  }
}

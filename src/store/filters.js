// スイッチ情報用のストア
export default {
  namespaced: true,
  state: {
    isSwitched: {
      'isSwitchedNotArrival': false,
      'isSwitchedArrival': false,
      'isSwitchedGoingHome': false,
    },
  },
  getters: {
    // isSwitchedを使用するゲッター
    isSwitched(state) { return state.isSwitched },
  },
  mutations: {
    // メッセージを変更するミューテーション
    setIsSwitched(state, payload) {
      state.isSwitched = payload.isSwitched
    }
  },
  actions: {
    doUpdate({ commit }, isSwitched) {
      commit('setIsSwitched', isSwitched)
    }
  }
}

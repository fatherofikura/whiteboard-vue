// スイッチ情報用のストア
export default {
  namespaced: true,
  state: {
    isSwitched: [
      { isSwitchedNotArrival: false},
      { isSwitchedArrival: false},
      { isSwitchedGoingHome: false},
    ],
  },
  getters: {
    // isSwitchedを使用するゲッター
    isSwitched(state) { return state.isSwitched },
  },
  mutations: {
    // メッセージを変更するミューテーション
    setIsSwitched(state, payload) {
      console.log('payload@mutations:' + payload.isSwitched)
      state.isSwitched = payload.isSwitched
    }
  },
  actions: {
    doUpdate({ commit }, isSwitched) {
      console.log('isSwitched@actions:' + { isSwitched })
      commit('setIsSwitched', isSwitched)
    }
  }
}

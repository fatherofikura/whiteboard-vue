// スイッチ情報用のストア
export default {
  namespaced: true,
  state: {
    switchedFilters: []
  },
  getters: {
    // isSwitchedを使用するゲッター
    switchedFilters(state) { return state.switchedFilters },
  },
  mutations: {
    // メッセージを変更するミューテーション
    setSwitchedFilters(state, payload) {
      state.switchedFilters = payload.switchedFilters
    }
  },
  actions: {
    doUpdate({ commit }, switchedFilters) {
      commit('setSwitchedFilters', { switchedFilters })
    }
  }
}

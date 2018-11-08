// スイッチ情報用のストア
export default {
  namespaced: true,
  state: {
    switchedFilters: [ '未出社', '在席', '帰宅', '出張', '外出', '社内', '休み', 'その他'],
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

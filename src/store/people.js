import people from '@/api/people.js'

// ホワイトボード表示情報用のストア
export default {
  namespaced: true,
  state: {
    detail: {},
  },
  getters: {
    detail: state => state.detail,
  }
  /* ストア処理未実装
  mutations: {
    set(state, { detail }) {
      state.detail = detail
    },
    clear(state) {
      state.detail = {}
    },
  },
  actions: {
    load({ commit }, id) {
      people.asyncFind(id, detail => {
        commit('set', { detail })
      })

    },
    destroy({ commit }) {
      commit('clear')
    }
  }
  */
}

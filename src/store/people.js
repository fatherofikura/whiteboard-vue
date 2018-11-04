import people from '@/api/people.js'

// 商品詳細用のVuexモジュール
export default {
  namespaced: true,
  state: {
    detail: {},
  },
  getters: {
    detail: state => state.detail,
  },
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
}

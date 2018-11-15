import people from '@/api/people.js'

// ホワイトボード上に表示する人の情報を管理するためのストア
export default {
  namespaced: true,
  state: {
    database: {},
  },
  getters: {
    database: state => state.database,
  },
  mutations: {
    set(state, { selecteddata }) {
      state.database = selecteddata
    },
    clear(state) {
      state.database = {}
    },
  },
  actions: {
    load({ commit }, parameter) {
      var selecteddata = people.select(parameter.switchedFilters, parameter.sectionName)
      commit('set', { selecteddata })
    },
    edit({ commit }, parameter) {
      // parameterは{CheckedList,ButtonName}
      people.update(parameter['checkedList'], parameter['buttonName'])
    },
    destroy({ commit }) {
      commit('clear')
    }
  }
}

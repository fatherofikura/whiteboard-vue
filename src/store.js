import Vue from 'vue'
import Vuex from 'vuex'
import people from '@/store/people.js'
import filters from '@/store/filters.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    people, // モジュールをストアルートに登録
    filters,
  }
})

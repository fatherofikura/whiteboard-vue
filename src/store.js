import Vue from 'vue'
import Vuex from 'vuex'
import people from '@/store/people.js'
import switches from '@/store/switches.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    people, // モジュールをストアルートに登録
    switches,
  }
})

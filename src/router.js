import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用コンポーネントの読み込み
import Home from '@/views/Home.vue'
import Whiteboard from '@/views/Whiteboard.vue'

// プラグインとして登録
Vue.use(VueRouter)

// VueRouterインスタンス作成
const router = new VueRouter({
  // ヒストリーモード
  mode: 'history',
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:section',
      component: Whiteboard
    },
  ]
})

// 生成したVueRouterインスタンスをエクスポート
export default router

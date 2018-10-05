import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Board2 from '@/components/Board2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Board',
      component: Board
    },
    {
      path: '/Board2',
      name: 'Board2',
      component: Board2
    }
  ],
  mode: 'history'
})

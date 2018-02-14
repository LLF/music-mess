import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TestSinger from '@/components/TestSinger/TestSinger'
import TestSingerDetail from '@/components/TestSinger/TestSingerDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/singer',
      name: 'singer',
      component: TestSinger,
      children: {
        path: ':id',
        name: 'singerDetail',
        component: TestSingerDetail
      }
    }
  ]
})

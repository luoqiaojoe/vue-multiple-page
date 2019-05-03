import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index/index.vue'
import Test from 'pages/test/test.vue'
import Test2 from 'pages/test2/test2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    },
  ]
})

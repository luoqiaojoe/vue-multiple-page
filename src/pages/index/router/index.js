import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index/index.vue'
import Test from 'pages/Test/Test.vue'

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
  ]
})

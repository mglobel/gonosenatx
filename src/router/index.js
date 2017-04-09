import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import MartialArts from '@/pages/MartialArts.vue'
import SelfDefense from '@/pages/SelfDefense.vue'
import Fitness from '@/pages/Fitness.vue'
import Youth from '@/pages/Youth.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/martial-arts',
      name: 'MartialArts',
      component: MartialArts
    },
    {
      path: '/self-defense',
      name: 'SelfDefense',
      component: SelfDefense
    },
    {
      path: '/fitness',
      name: 'Fitness',
      component: Fitness
    },
    {
      path: '/youth',
      name: 'Youth',
      component: Youth
    }
  ]
})

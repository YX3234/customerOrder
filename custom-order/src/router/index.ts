import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'
import HomeView from '../views/HomeView.vue'
// import MealItem from '@/components/plugin/mealItem/MealItem.vue'
import MealCreate from '@/components/plugin/mealItem/MealCreate.vue'
import CreatePlugin from '@/views/CreatePlugin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'label',
      component: LayoutView,
      children: [
        // { path: '/', name: 'home', component: HomeView },
        {
          path: '/design',
          name: 'design',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/DesignView.vue')
        },
        {
          path: '/createPlugin',
          // name: 'createPlugin',//只有子路由具有名称
          component: CreatePlugin
          // children: []
        },
        {
          path: '/createPlugin/mealItem',
          component: MealCreate
        },
        {
          path: '/',
          redirect: '/design'
        }
      ]
    }
  ]
})

export default router

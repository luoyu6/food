import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import navbar from '@/components/navbar'
import food from '@/components/food'
import seller from '@/components/seller'
import rating from '@/components/rating'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/food',
      children:[
      
    {
      path: 'food',
      name: 'food',
      component: food
    },
    {
      path: 'seller',
      name: 'seller',
      component: seller
    },
    {
      path: 'rating',
      name: 'rating',
      component: rating
    }
      ]
    },
    
    
  ]
})

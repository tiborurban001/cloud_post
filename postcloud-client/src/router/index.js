import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

let routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.onReady(() => {
  store.commit('isAuthenticated');
})

router.beforeEach((to, from, next) => {
 //store.commit('isAuthenticated');
  if  (to.matched.some(record => record.meta.requiresAuth)) {
    if(localStorage.getItem('jwt') == null){
      next({
        path: '/login',
        params: {nextUrl: to.fullPath}
      })
    }else{
      
      next();
  }
}else{
  if(localStorage.getItem('jwt') != null){

    next({
      path: '/',
      params: {nextUrl: '/'}
    })
  } else {
    next()
  }
}
}) 


export default router

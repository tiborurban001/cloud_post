import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from '../store/index.js'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import Post from '../views/Post.vue'


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
  },
  {
    path: '/newpost',
    name: 'post',
    component: Post,
    meta: {
      requiresAuth: true
    }
  },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
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
// tslint:disable:no-unused-variable
  axios.get(store.state.api_url + 'post/getposts')
    .then(response => {
      store.commit('getFeed', response.data);
    })
    .catch(err => {
      if (err) throw err;
    });

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

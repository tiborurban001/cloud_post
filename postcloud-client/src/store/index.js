import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false,
    feed: [
    {
      id: 0,
      user_id: 0,
      display_name: 'Garrosh Hellscream',
      desc: 'Lol, Dark Portal to Draenor go BRRRR...',
      image: 'https://static.icy-veins.com/images/wow/og-image-siege-of-orgrimmar-garrosh-hellscream.jpg',
      timestamp:1620864000
    },
    {
      id: 1,
      user_id: 1,
      display_name: 'Arthas',
      desc: 'Where is my boney dragon?!',
      image: 'https://i.imgflip.com/45cmpc.jpg',
      timestamp: 1620904987
    },
    {
      id: 2,
      user_id: 2,
      display_name: 'Khadgar',
      desc: '*insert Hero of Azeroth here*',
      image: 'https://i.redd.it/y3q32mv5mga21.jpg',
      timestamp: 1620904973
    }
    ]

  },
  mutations: {
    isAuthenticated(state){
      if(localStorage.getItem('jwt') != null){
        state.isAuthenticated = true;
      }else{
        state.isAuthenticated = false;
      }
    },

    login (state, token) {
      state.isAuthenticated = true;
      localStorage.setItem('jwt',token)
      router.push('/')
    },
    logout(state){
      state.isAuthenticated = false;
      localStorage.removeItem('jwt')
      router.push('/login')
    }
  },
  actions: {

  },
  modules: {

  }
})

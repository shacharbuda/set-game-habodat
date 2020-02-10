import Vue from 'vue'
import Router from 'vue-router'
import home from './components/Home.vue'
import leaderboard from './components/Leaderboard.vue'
import instructions from './components/Instructions.vue'
import multiplayer from './components/Multiplayer.vue'
import loginForMultiplayer from './components/LoginForMultiplayer.vue'
import singlePlayer from './components/SinglePlayer.vue'
import cards from './components/cardTable.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: leaderboard
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: instructions
    },
    {
      path: '/multiplayer',
      name: 'multiplayer',
      component: multiplayer
    },
    {
      path: '/loginForMultiplayer',
      name: 'loginForMultiplayer',
      component: loginForMultiplayer
    },
    {
      path: '/single-player',
      name: 'singlePlayer',
      component: singlePlayer
    },
    {
      path: '/cards',
      name: 'cards',
      component: cards
    },

  ]
})

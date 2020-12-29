import { createRouter, createWebHistory } from 'vue-router'
import header from './components/NavHeader.vue'
import player from './pages/player.vue'
import bagage from './pages/bagage.vue'
import adventure from './pages/adventure.vue'
import illustrate from './pages/illustrate.vue'
import register from './pages/register.vue'


const routes = [
  {
    path: '/',
    component: header,
    redirect: {name: 'player'},
    children: [
      {
        path: '/player',
        name: 'player',
        component: player
      },
      {
        path: '/bagage',
        name: 'bagage',
        component: bagage
      },
      {
        path: '/adventure',
        name: 'adventure',
        component: adventure
      },
      {
        path: '/illustrate',
        name: 'illustrate',
        component: illustrate
      },
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
]
const vueRouter = createRouter({
  history: createWebHistory(),
  routes
})

export default vueRouter


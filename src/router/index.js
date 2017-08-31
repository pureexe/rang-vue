import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Chat from '@/components/Chat'
import Bots from '@/components/Bots'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/bot',
      name: 'Bots',
      component: Bots
    }
  ]
})

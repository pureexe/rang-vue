import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Chat from '@/components/Chat'
import Bots from '@/components/Bots'
import Teach from '@/components/Teach'
import Error from '@/components/Error'

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
    },
    {
      path: '/teach/:id',
      name: 'Teach',
      component: Teach
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    }
  ]
})

import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import EventLayout from '../views/event/Layout.vue'
import AboutLayout from '../views/about/Layout.vue'
import AboutDetails from '../views/about/AboutDetails.vue'
import AboutSingle from '../views/about/AboutSingle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEdit
        }
      ]
    },
    {
      path: '/about-us',
      name: 'AboutLayout',
      component: AboutLayout,
      children: [
        {
          path: '',
          name: 'AboutDetails',
          component: AboutDetails
        },
        {
          path: 'single',
          name: 'AboutSingle',
          component: AboutSingle
        }
      ] 
    },
   // Create redirect to new path//
    {
      path: '/about',
      redirect: { name: 'AboutLayout' }
    }
  ]
})

export default router

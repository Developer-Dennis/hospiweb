import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Work from  '../views/work-with-us.vue'
import Contact from '../views/contact.vue'
import Department from '../views/department.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  
  {
    path: '/work-with-us',
    name: 'work-with-us',
    component: Work
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/department',
    name: 'department',
    component: Department
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

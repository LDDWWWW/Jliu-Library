import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegister from '../views/FirebaseRegisterView.vue'
import AddBookView  from '@/views/AddBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'

//123
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
    {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
    {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegister
  },
      {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
    {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
      {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
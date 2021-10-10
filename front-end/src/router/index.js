import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FiltroCoworking from '../views/FiltroCoworking.vue'
import FiltroColiving from '../views/FiltroColiving.vue'
import Formulario from '../views/Formulario.vue'
import DescripcionHostal from '../views/DescripcionHostal.vue'
import PanelAdmin from '../views/PanelAdmin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Filtrocoworking',
    name: 'FiltroCoworking',
    component: FiltroCoworking
  },
  {
    path: '/filtrocoliving',
    name: 'FiltroColiving',
    component: FiltroColiving
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/descripcionhostal',
    name: 'DescripcionHostal',
    component: DescripcionHostal
  },
  {
    path: '/paneladmin',
    name: 'PanelAdmin',
    component: PanelAdmin
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

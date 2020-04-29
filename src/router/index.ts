import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'



import Layout from '@/components/Layout/Layout.vue';
import Login from '@/pages/Login/Login.vue';
import ErrorPage from '@/pages/Error/Error.vue';
// Core
import TypographyPage from '@/pages/Typography/Typography.vue';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic.vue';

// Maps
import GoogleMapPage from '@/pages/Maps/Google.vue';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard.vue';

// Charts
import ChartsPage from '@/pages/Charts/Charts.vue';

// Ui
import IconsPage from '@/pages/Icons/Icons.vue';
import NotificationsPage from '@/pages/Notifications/Notifications.vue';


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage,
  },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'AnalyticsPage',
        component: AnalyticsPage,
      },
      {
        path: 'typography',
        name: 'TypographyPage',
        component: TypographyPage,
      },
      {
        path: 'components/icons',
        name: 'IconsPage',
        component: IconsPage,
      },
      {
        path: 'notifications',
        name: 'NotificationsPage',
        component: NotificationsPage,
      },
      {
        path: 'components/charts',
        name: 'ChartsPage',
        component: ChartsPage,
      },
      {
        path: 'tables',
        name: 'TablesBasicPage',
        component: TablesBasicPage,
      },
      {
        path: 'components/maps',
        name: 'GoogleMapPage',
        component: GoogleMapPage,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

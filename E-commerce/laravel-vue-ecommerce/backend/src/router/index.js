import { createRouter, createWebHistory } from "vue-router"
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import RequestPassword from '../views/RequestPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import AppLayout from '../components/AppLayout.vue'
import store from "../store"
import NotFound from "../views/NotFound.vue";
import Products from "../views/Products/Products.vue"
import Orders from "../views/Orders/Orders.vue"
import OrderView from "../views/Orders/Orders.vue"
import Report from "../views/Reports/Report.vue"


const routes = [

    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta: {
            requiresAuth: true
        },
        children:[
            {

                path: '/dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
            {

                path: '/products',
                name: 'app.products',
                component: Products
            },
            {

                path: '/orders',
                name: 'app.orders',
                component: Orders
            },
            {

                path: '/orders/:id',
                name: 'app.orders.view',
                component: OrderView
            },
            {

                path: '/reports',
                name: 'app.reports',
                component: Report
            },
            
        ]  
    },

    {
        
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {

        path: '/request-password',
        name: 'RequestPassword',
        component: RequestPassword,
        meta: {
            requiresGuest: true
        }
    },

    {

        path: '/reset-password/:token',
        name: 'ResetPassword',
        component: ResetPassword,
        meta: {
            requiresGuest: true
        }
    },
    {

        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: NotFound,
        
    }
    
];

const router = createRouter(
    {
        history:createWebHistory(),
        routes


})

router.beforeEach((to, from, next) => 
{
    if (to.meta.requiresAuth && !store.state.user.token) {

      next({name: 'login'})

    } else if (to.meta.requiresGuest && store.state.user.token) {

      next({name: 'app.dashboard'})

    } else {

      next();
    }
  
  })


export default router;
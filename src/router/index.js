import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import PersonalCenter from '@/pages/personal/personalCenter.vue'
import Shop from '@/pages/shop/shop.vue'
import Cart from '@/pages/cart/cart.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/login'
        },
        {
            path: '/personalCenter',
            name: 'personalCenter',
            component: PersonalCenter
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'
import promise from 'es6-promise';
import vant from 'vant'
import 'vant/lib/vant-css/index.css'



Vue.config.productionTip = false
promise.polyfill()
Vue.use(vant)


new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

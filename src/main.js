import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import promise from 'es6-promise';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.px.css';



Vue.config.productionTip = false
promise.polyfill()
Vue.use(YDUI)

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

/* Vendor Package Imports */
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'es6-promise/auto';
import VueRouter from 'vue-router';

/* App Imports */
import store from './store';
import router from './routes';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const app = new Vue({
    el: '#app',
    store,
    router,
});

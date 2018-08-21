/* Vendor Package Imports */
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'es6-promise/auto';
import VueRouter from 'vue-router';

/* App Imports */
import store from './store';
import router from './routes';
import Menu from './components/Menu.vue';
import StatusBar from './components/StatusBar.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.component('a-menu', Menu);
Vue.component('a-status-bar', StatusBar);

const app = new Vue({
    el: '#app',
    store,
    router,
});

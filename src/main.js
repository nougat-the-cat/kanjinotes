import Vue from 'vue'
import App from './App.vue'
import store from './components/store.js'
import Vuex from 'vuex'

Vue.use(Vuex);

new Vue({
    store,
    render: h => h(App),
  }).$mount('#App')


App.use(store)

App.mount('#App')
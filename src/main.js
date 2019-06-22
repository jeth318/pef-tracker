import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css'

Vue.config.productionTip = false

Vue.use(SuiVue);
Vue.use(Vuex);
import { store as storeObject} from './store';
const store = new Vuex.Store(storeObject);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = {
  state: {
    pefValue: 400
  },
  mutations: {
    setPefValue (state, value) {
      state.pefValue = value;
    }
  }
}

// taQcyd-jyhnar-xoxpi1
// mongodb://<dbuser>:<dbpassword>@ds159073.mlab.com:59073/pef-tracker
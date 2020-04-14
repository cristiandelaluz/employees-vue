import Vue from 'vue';
import Vuex from 'vuex';
/* Modules */
import employee from './employee';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    employee,
  },
});

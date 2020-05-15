import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resetPasswordModal: false,
  },
  mutations: {
    updateField,
    resetPasswordModalAction(state, arg) {
      state.resetPasswordModal = arg;
    },
  },
  actions: {

  },
  modules: {
  },
  getters: {
    getField,
  },
});

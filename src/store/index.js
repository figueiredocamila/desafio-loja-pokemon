import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const states = {
  checkoutStatus: false,

};

const getters = {

};

const actions = {

};

const mutations = {
  setCheckoutStatus(state, payload) {
    state.checkoutStatus = payload;
    console.log(state.checkoutStatus);
  },
};

export default new Vuex.Store({
  states,
  getters,
  actions,
  mutations,
});

import Vue from 'vue';
import Vuex from 'vuex';
import PokeApi from '@/services/PokeApi';
import { getLocalCheckout, setLocalCheckout } from '@/utils/localCheckout';

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    checkoutStatus: false,
    productList: [],
    checkoutList: getLocalCheckout() || [],
  },

  getters: {
    productList(state) {
      return state.productList;
    },

    checkoutList(state) {
      return state.checkoutList;
    },

  },

  actions: {
    async getProductList({ commit }) {
      try {
        let productList = (await PokeApi.getPokemonList()).data.pokemon;
        productList = productList.map((item) => item.pokemon);
        commit('setProductList', productList);
      } catch (e) {
        console.error(e);
      }
    },

    addItemToCheckout({ commit }, payload) {
      try {
        commit('setCheckoutList', payload);
      } catch (e) {
        console.error(e);
      }
    },

    removeItemFromCheckout({ commit }, payload) {
      try {
        const checkoutList = [...this.state.checkoutList];
        const itemIndex = checkoutList.findIndex((i) => i.name === payload.name);
        checkoutList.splice(itemIndex, 1);
        commit('removeItemFromCheckoutList', checkoutList);
      } catch (e) {
        console.error(e);
      }
    },
  },

  mutations: {
    setCheckoutStatus(state, payload) {
      state.checkoutStatus = payload;
    },

    setProductList(state, payload) {
      state.productList = payload;
    },

    setCheckoutList(state, payload) {
      state.checkoutList = [...state.checkoutList, payload];
      setLocalCheckout(JSON.stringify(state.checkoutList));
    },

    removeItemFromCheckoutList(state, payload) {
      state.checkoutList = payload;
      setLocalCheckout(JSON.stringify(state.checkoutList));
    },

  },

});

export default store;

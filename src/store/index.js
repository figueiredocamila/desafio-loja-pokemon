import Vue from 'vue';
import Vuex from 'vuex';
import PokeApi from '@/services/PokeApi';

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    checkoutStatus: false,
    productList: [],
    checkoutList: [],
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
        const productList = (await PokeApi.getPokemonList()).data.pokemon;
        console.log(productList);
        commit('setProductList', productList);
      } catch (error) {
        console.log(error);
      }
    },

    addItemsToCheckout({ commit }, payload) {
      try {
        commit('setCheckoutList', payload);
      } catch (error) {
        console.log(error);
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
    },
  },

});

export default store;

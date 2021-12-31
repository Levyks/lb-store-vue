import { createStore } from 'vuex'

import { Cart } from '@/typings';

import ProductModel from '@/models/product.model';

const cart: Cart = {};

export default createStore({
  state: {
    cart,
  },
  mutations: {
    addToCart(state, product: ProductModel) {
      
      const key = '_' + product.id.toString();

      if(state.cart[key]) {
        state.cart[key].quantity++;
      } else {
        state.cart[key] = {
          product,
          quantity: 1,
        };
      }

    },
    removeFromCart(state, product: ProductModel) {
      const key = '_' + product.id.toString();

      delete state.cart[key];
    }   
  },
  actions: {
  },
  modules: {
  }
})

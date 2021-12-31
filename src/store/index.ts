import { createStore } from 'vuex'

import { Cart } from '@/typings';

import ProductModel from '@/models/product.model';

const cart: Cart = JSON.parse(localStorage.getItem('cart') || '{}');

function getIdString<T extends {id: number}>(obj: T): string {
  return '_' + obj.id.toString();
}

const store = createStore({
  state: {
    cart,
  },
  getters: {
    cartAsArray: state => {
      return Object.values(state.cart);
    },
    numberOfItemsInCart: state => {
      return Object.values(state.cart).reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    },
    cartTotal: state => {
      return Object.values(state.cart).reduce((acc, item) => {
        return acc + item.quantity * item.product.price;
      }, 0);
    }
  },
  mutations: {
    addToCart(state, product: ProductModel) {
      
      if(state.cart[getIdString(product)]) {
        state.cart[getIdString(product)].quantity++;
      } else {
        state.cart[getIdString(product)] = {
          product,
          quantity: 1,
        };
      }

    },
    removeFromCart(state, product: ProductModel) {
      delete state.cart[getIdString(product)];
    }   
  },
  actions: {
  },
  modules: {
  }
});

store.subscribe((mutation, state) => {
  localStorage.setItem('cart', JSON.stringify(state.cart));
});

export default store;

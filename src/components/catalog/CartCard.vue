<template>
  <div class="card">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <router-link class="cart-link" to="/cart">
          <h4 class="card-title mt-1 mb-3">Your Cart</h4>
        </router-link>
      </li>
      <CartCardRow v-for="(cartItem, idx) in $store.getters.cartAsArray" :key="idx" :cartItem="cartItem" />
      <li class="list-group-item px-4 py-3">
        <button class="btn btn-primary w-100" :disabled="!$store.getters.numberOfItemsInCart">Checkout</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CartCardRow from './CartCardRow.vue';

export default defineComponent({
  name: 'CartCard',
  components: {
    CartCardRow
  }
})
</script>

<style scoped>
  .cart-link {
    text-decoration: none;
    color: black;
  }

  .cart-link:hover {
    color: #285388;
  }

</style>
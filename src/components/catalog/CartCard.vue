<template>
  <div class="card">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <h4 class="card-title mt-1 mb-3">Your Cart</h4>
      </li>
      <CartCardRow v-for="(cartItem, idx) in Object.values(cart)" :key="idx" :cartItem="cartItem" />
      <li class="list-group-item px-4 py-3">
        <button class="btn btn-primary w-100" :disabled="!numberOfItems">Checkout</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CartCardRow from './CartCardRow.vue';
import { Cart } from '@/typings';

export default defineComponent({
  name: 'CartCard',
  components: {
    CartCardRow
  },
  computed: {
    cart(): Cart {
      return this.$store.state.cart;
    },
    numberOfItems(): number {
      return Object.values(this.cart).length;
    }
  }
})
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-9">
        <h1 class="text-center mb-3">Catalog</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-9">
        <Products />
      </div>
      <div class="col-12 col-lg-3 my-3 my-lg-0">
        <CartCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  
  import Products from '@/components/catalog/Products.vue';
  import CartCard from '@/components/catalog/CartCard.vue';

  export default defineComponent({
    name: 'Catalog',
    components: {
      Products,
      CartCard
    }
  })

</script>

<template>
  <div class="grid">
    <Product v-for="(product, idx) in products" :key="idx" :product="product" />
  </div>  
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Product from './Product.vue';
  
  import ProductsService from '@/services/products.service';
  import ProductModel from '@/models/product.model';
  
  const productsService = new ProductsService();

  export default defineComponent({
    name: 'Products',
    components: {
      Product
    },
    data() {
      const products: ProductModel[] = [];
      return {
        products
      }
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        return productsService.query().then(products => {
          this.products = products
        });
      }
    }
  });

</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
</style>
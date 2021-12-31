<template>
  <div class="spinner-wrapper" v-if="loading">
    <div class="spinner-border mt-5" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="grid" v-else>
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
        products,
        loading: true
      }
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        return productsService.query().then(products => {
          this.products = products;
          this.loading = false;
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

  .spinner-wrapper {
    width: 100%;
    text-align: center;
  }

  .spinner-border {
    width: 8rem;
    height: 8rem;
    font-size: 1.5rem;
  }
</style>
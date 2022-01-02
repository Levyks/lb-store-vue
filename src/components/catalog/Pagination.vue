<template>
  <nav v-if="products.total_pages">
    <ul class="pagination justify-content-center align-items-center mt-3">
      <li class="page-item" :class="{disabled: products.current_page <= 1}">
        <button 
          class="page-link"
          @click="setPage(products.current_page-1)"
        >Previous</button>
      </li>
      <li class="page-item">
        <input 
          class="form-control" 
          type="number" 
          min="1"
          :max="products.total_pages"
          :value="products.current_page"
          @blur="handleBur"
        >
      </li>
      <li class="page-item disabled">
        <strong class="page-link">/</strong>
      </li>
      <li class="page-item">
        <input class="form-control" type="number" :value="products.total_pages" readonly>
      </li>
      <li class="page-item" :class="{disabled: products.current_page >= products.total_pages}">
        <button 
          class="page-link"
          @click="setPage(products.current_page+1)"
        >Next</button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PaginationModel from '@/models/pagination.model';
import ProductModel from '@/models/product.model';

export default defineComponent({
  props: {
    products: {
      type: Object as () => PaginationModel<ProductModel>,
      required: true
    }
  },
  emits: ['pageChange'],
  methods: {
    setPage(page: number) {
      if (page > 0 && page <= this.products.total_pages) {
        this.products.current_page = page;
        this.$emit('pageChange', page);
      }
    },
    handleBur(event: FocusEvent) {
      const target = event.target as HTMLInputElement;
      this.setPage(Number(target.value));
      target.value = this.products.current_page.toString();
    }
  }
})
</script>

<style scoped>

  input {
    width: 100px;
  }

</style>
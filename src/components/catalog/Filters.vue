<template>
  
  <div class="card">
    <ul class="list-group list-group-flush">

      <li class="list-group-item">
        <h4 class="card-title mt-1 mb-3">Filters</h4>
      </li>

      <li class="list-group-item" v-for="(category, idx) in categories" :key="idx">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" :value="category.id" :id="`filter-category-${category.id}`" @change="handleChange">
          <label class="form-check-label" :for="`filter-category-${category.id}`">
            {{category.name}}
          </label>
        </div>  
      </li>

      <li class="list-group-item text-center" v-if="loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </li>

    </ul>
    
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CategoriesService from '@/services/resources/categories.service';
import CategoryModel from '@/models/category.model';

const categoriesService = new CategoriesService();

export default defineComponent({
  name: 'Filters',
  created() {
    this.fetchCategories();
  },
  data() {
    const categories: CategoryModel[] = [];
    const selected: number[] = [];
    return {
      categories,
      loading: true,
      selected
    }
  },
  emits: [
    'change'
  ],
  methods: {
    async fetchCategories() {
      this.loading = true;
      this.categories = await categoriesService.query();
      this.loading = false;
    },
    handleChange(event: Event) {
      const target = event.target as HTMLInputElement;
      const category_id = parseInt(target.value);
      
      if(target.checked) {
        this.selected.push(category_id);
      } else {
        this.selected = this.selected.filter(id => id !== category_id);
      }

      this.$emit('change', this.selected);
    }
  }
})
</script>

<template>
  <div class="card">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search" v-model="search" @input="handleInput">
      <span class="input-group-text"><i class="fas fa-search"></i></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const DEBOUNCE_MS = 1000;

export default defineComponent({
  name: "Search",
  data() {
    return {
      search: this.query,
      debounce: 0
    }
  },
  props: {
    query: {
      type: String,
      default: ""
    }
  },
  emits: [
    "search"
  ],
  methods: {
    handleInput() {
      if (this.debounce) {
        clearTimeout(this.debounce);
      }
      this.debounce = setTimeout(() => {
        this.search = this.search.trim();
        this.$emit("search", this.search.trim());
      }, DEBOUNCE_MS);
    }  
  }
});
</script>

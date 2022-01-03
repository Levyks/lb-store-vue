<template>
  <div class="card">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search" :value="query" @input="search_debouncer.debounce($event.target.value)">
      <span class="input-group-text"><i class="fas fa-search"></i></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Debouncer from 'svelte-debouncer';

const DEBOUNCE_MS = 1000;

export default defineComponent({
  name: "Search",
  data() {
    return {
      search_debouncer: new Debouncer((q: string) => this.$emit("search", q.trim()), DEBOUNCE_MS, true),
    }
  },
  props: {
    query: {
      type: String,
      default: ""
    }
  },
  emits: [ "search" ]
});
</script>

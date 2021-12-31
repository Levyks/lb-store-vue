<template>
  <Navbar />
  <div class="mt-3 content-wrapper">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Navbar from '@/components/navbar';

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
})
</script>

<style>
  html, body, #app {
    height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
  }

  .content-wrapper {
    flex: 1;
  }
</style>
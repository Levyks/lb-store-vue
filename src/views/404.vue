<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100">
    <div class="card">
      <div class="card-header d-flex justify-content-center align-items-center p-2">
        <h2>404</h2>
        <h3 class="text-secondary ms-3">Page not found</h3>
      </div>
      <div class="card-body p-3">
        <p>Click <router-link to="/">here</router-link> to go back to the home page</p>
        <p>Or wait <strong>{{ remainingTime }}</strong> seconds until you're redirected automatically</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      remainingTime: 5
    }
  },
  mounted() {
    const interval = setInterval(() => {
      this.remainingTime--
      if (this.remainingTime === 0) {
        clearInterval(interval)
        this.$router.push('/')
      }
    }, 1000);
  }
})
</script>

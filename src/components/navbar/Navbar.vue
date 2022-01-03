<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid justify-content-end">

      <router-link class="navbar-brand me-auto" to="/">LB Store</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

        <div class="navbar-nav me-auto">
          <router-link active-class="active" class="nav-link" to="/catalog">Catalog</router-link>
        </div>

        <div class="navbar-nav align-items-stretch align-items-sm-center">

          <CartIcon class="d-none d-sm-block" />

          <router-link 
            v-if="$store.state.auth.checked && !$store.state.auth.isLoggedIn" 
            to="/login" 
            class="btn btn-outline-secondary text-white"
          >Login</router-link>

          <div v-else-if="$store.state.auth.checked" class="nav-item dropdown">

            <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{$store.getters.userFullname}}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" @click="handleLogout">Logout</a></li>
            </ul>


          </div>

        </div>
        
      </div>

      <CartIcon class="d-block d-sm-none ms-3" />

    </div>
  </nav>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CartIcon from './CartIcon.vue';

export default defineComponent({
  components: {
    CartIcon
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login');
      });
    }
  }
})
</script>

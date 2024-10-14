<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="{ name: 'About' }">About</RouterLink>
      <RouterLink :to="{ name: 'Contact' }">Contact</RouterLink>
      <RouterLink :to="{ name: 'Job' }">Jobs</RouterLink>
      <RouterLink to="/" class="compte">Creer un compte</RouterLink>
      <RouterLink to="/" class="signup">Se connecter</RouterLink>
    </nav>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin: 20px auto;
  padding: 20px;
  font-weight: bold;
  background-color: rgb(10, 120, 254);
}

nav a.router-link-exact-active {
  color: #0acaba;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: rgb(237, 237, 237);
  margin-right: 10px;
}
nav .compte {
  margin-left: 200px;
  border: none;
}

nav a:first-of-type {
  border: 0;
}
.container {
  margin-top: 20px;
  margin-left: 70px;
  margin-right: 70px;
  margin-bottom: 20px;
}
</style>

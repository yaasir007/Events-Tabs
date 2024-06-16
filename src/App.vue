<script setup>
import { inject } from  'vue'
import { RouterLink, RouterView } from 'vue-router'

const GStore = inject('GStore');

</script>

<template>
  <div id="layout">
    <div class="msg" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{name: 'EventList'}">Events</RouterLink> |
          <RouterLink :to="{ name: 'AboutLayout' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  --webkit-font-smoothing: anthialiased;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

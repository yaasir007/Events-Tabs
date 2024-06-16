<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const GStore = inject('GStore');

const register = () => {
  GStore.flashMessage = "Congrats, You are registered";
  router.push({
    name: 'EventDetails'
  })
  setTimeout(() => {
    GStore.flashMessage = '';
  }, 4000);
}
</script>


<template>
  <p>Register for the event here</p>
  <br>
  <button @click="register">Register Now</button>
</template>

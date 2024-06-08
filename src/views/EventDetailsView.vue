<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/eventService';

const event = ref(null)
const id = ref(123)

onMounted(() => {
  EventService.getEvent(id.value)
  .then((response) => {
    event.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.name }} on {{  event.date }} @ {{ event.location }}</p>
    <p>{{ event.location }}</p>
  </div>
</template>

<style scoped>

</style>

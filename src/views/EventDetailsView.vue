<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/eventService'

const props = defineProps({
  id: {
    required: true
  }
})

const event = ref(null)

onMounted(() => {
  EventService.getEvent(props.id)
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
    <RouterLink class="back-btn" :to="{ name: 'event-list' }">Back</RouterLink>
  </div>
</template>

<style scoped>
.back-btn {
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 56px;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  font-weight: 400;
  font-size: 16px;
  background: #fff;
  color: #696969;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
  text-decoration: none;
}

.back-btn:hover{
  background: rgba(255,255,255,0.9);
  box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
}
</style>

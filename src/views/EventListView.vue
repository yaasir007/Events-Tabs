<script setup>
import EventCard from '@/components/EventCard.vue';
import { ref } from 'vue'

const events = ref([
  {
    id: 8765432,
    category: 'community gardening',
    title: 'Plant a Row for the Hungry',
    description: 'Help provide fresh produce for those in need by volunteering at this community garden event.',
    location: 'Green Meadows Park',
    date: '22 June 2024',
    time: '9:00',
    petsAllowed: true,
    organizer: 'Green Thumbs Up'
  },
  {
    id: 1234567,
    category: 'coding workshop',
    title: 'Build Your First Web App',
    description: 'Learn the basics of web development in this beginner-friendly workshop.',
    location: 'Tech Central',
    date: '15 June 2024',
    time: '10:00',
    petsAllowed: false,
    organizer: 'Code Ninjas'
  },
  {
    id: 9876543,
    category: 'board game night',
    title: 'Dice, Drinks, and Dragons',
    description: 'Bring your favorite board games and join us for an evening of fun and friendly competition.',
    location: 'The Caffeinated Owl',
    date: '29 June 2024',
    time: '18:00',
    petsAllowed: true,
    organizer: 'The Board Game Bunch'
  }
])
</script> 

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

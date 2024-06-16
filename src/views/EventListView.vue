<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
const props = defineProps(['page'])

const events = ref(null)
const totalEvents = ref(0)

const page = computed(() => {
  return props.page
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(2, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.log(error)
      })
  })
})
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <RouterLink
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        &#60; Previous
      </RouterLink>

      <RouterLink
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next &#62;
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: black;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>

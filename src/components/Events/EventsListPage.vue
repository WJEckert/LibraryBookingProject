<template>
  <div class="page">
    <h1>{{ $t('eventsList.title') }}</h1>
    <div v-for="event in events" :key="event._id">
      <img :src="event.image" alt="">
      <h2>{{event.title}}</h2>
      <p>{{event.description}}</p>
      <p>{{event.date}}</p>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "EventsListPage",
  data() {
    return {
      events: []
    }
  },
  async created() {
    this.events = await api.getEvents()
  }
}
</script>

<style scoped>

</style>

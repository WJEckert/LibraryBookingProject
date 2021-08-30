<template>
  <div class="page">
    <h1 class="mb-8">{{ $t('bookingsList.title') }}</h1>
    <div v-for="(booking, index) in bookings" :class="{'dark': index % 2 === 0}"
         class="p-4 booking-pill">
      <p>{{ booking.name }}</p>
      <p>{{ booking.email }}</p>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: "EmailsList",
  data() {
    return {
      bookings: []
    }
  },
  async created() {
    const response = await api.getNowEmails()
    if (response === "NOT_TIME_TO_BOOK") {
      this.bookings = []
    } else {
      this.bookings = response
    }
  }
}
</script>

<style scoped>
table {
  margin: auto;
}

.dark {
  background: var(--gray-300);
}

.booking-pill {
  font-size: 0.75rem;
}
</style>

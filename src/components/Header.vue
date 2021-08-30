<template>
  <nav>
    <ul>
      <li class="mb-4">
        <router-link
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            to="/">{{ $t('menu.home') }}
        </router-link>
      </li>
      <li class="mb-4">
        <router-link
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            to="/bookings">{{ $t('menu.bookings') }}
        </router-link>
      </li>
      <li class="mb-4">
        <router-link
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            to="/top">{{ $t('menu.topUsers') }}
        </router-link>
      </li>
<!--      <li class="mb-4">-->
<!--        <router-link-->
<!--            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"-->
<!--            to="/create-event">{{ $t('menu.createEvent') }}-->
<!--        </router-link>-->
<!--      </li>-->
<!--      <li class="mb-4">-->
<!--        <router-link-->
<!--            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"-->
<!--            to="/events">{{ $t('menu.events') }}-->
<!--        </router-link>-->
<!--      </li>-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header.vue"
}
</script>

<style scoped>

</style>

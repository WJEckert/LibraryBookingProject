import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: function(resolve) {
        require(['@/components/OfficeBookings/OfficeBooking.vue'], resolve)
      }
    },
    {
      path: '/bookings',
      component: function(resolve) {
        require(['@/components/OfficeBookings/BookingsList.vue'], resolve)
      }
    },
    {
      path: '/create-event',
      component: function(resolve) {
        require(['@/components/Events/CreateEventPage.vue'], resolve)
      }
    },
    {
      path: '/events',
      component: function(resolve) {
        require(['@/components/Events/EventsListPage.vue'], resolve)
      }
    },
    {
      path: '/top',
      component: function(resolve) {
        require(['@/components/TopUsers/TopUsers.vue'], resolve)
      }
    },
  ]
})

export default router

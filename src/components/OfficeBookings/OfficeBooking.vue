<template>
  <div class="page">
    <div v-if="!success && !error">
      <img class="pb-5" src="@/assets/images/bbflogo.jpg" alt="">
      <h1>{{$t("officeBooking.title")}}</h1>
      <p>{{$t("officeBooking.introText")}}</p>
      <p class="mt-3">{{$t("officeBooking.secondText")}}</p>

      <h2 class="mt-4"><span class="text-blue-600 font-bold text-4xl">{{seatsLeft}}</span> {{$t("officeBooking.seatsLeft")}}</h2>

      <div class="text-left mt-8">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold" for="name">
            {{$t('common.name')}}
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            @focus="errors.name = ''"
            :class="{'border-red': errors.name}"
            id="name" type="text" :placeholder="$t('common.name')" v-model="name">
          <p class="error">{{errors.name}}</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold" for="email">
            {{$t('common.email')}}
          </label>
          <input
            @focus="errors.email = ''"
            :class="{'border-red': errors.email}"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email" type="text" :placeholder="$t('common.email')" v-model="email">
          <p class="error">{{errors.email}}</p>
        </div>
        <div class="text-center mt-8" v-if="ableToBook">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                  @click="bookOffice">
            {{$t('officeBooking.bookButton')}}
          </button>
        </div>
        <div class="text-center mt-12" v-else>
          <h1>{{$t('officeBooking.notAbleToBookTitle')}}</h1>
          <p>{{$t('officeBooking.notAbleToBookText')}}</p>
        </div>
      </div>
    </div>

    <div v-if="success">
      <img class="pb-5" src="@/assets/images/success.png" alt="">
      <h1>{{$t('officeBooking.successTitle')}}</h1>
      <p>{{$t('officeBooking.successText')}}</p>
      <button
        @click="reset"
        class="mt-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        {{$t('common.home')}}
      </button>
    </div>

    <div v-if="error">
      <img class="pb-5" src="@/assets/images/facepalm.jpg" alt="">
      <h1>{{$t('officeBooking.errorTitle')}}</h1>
      <p>{{errorMessage}}</p>
      <button
        @click="reset"
        class="mt-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        {{$t('common.home')}}
      </button>
    </div>
  </div>
</template>

<script>
  import api from "@/services/api"
  import {validEmail} from "@/services/utils"

  export default {
    name: "OfficeBooking.vue",
    data() {
      return {
        name: "",
        email: "",
        seatsLeft: null,
        success: null,
        error: null,
        errorMessage: "",
        errors: {
          name: null,
          email: null
        }
      }
    },
    async created() {
      await this.getSeatsLeft()
    },
    computed: {
      ableToBook() {
        const d = new Date()
        const hours = d.getHours()
        return hours >= 8 && hours < 19
      }
    },
    methods: {
      async getSeatsLeft() {
        const result = await api.getSeatsLeft()
        if(result.data.payload === "NOT_TIME_TO_BOOK") {
          this.seatsLeft = 0
          return
        }
        this.seatsLeft = result.data.payload
      },
      clearForm() {
        this.name = ""
        this.email = ""
      },
      validate() {
        let result = true

        if (!validEmail(this.email)) {
          this.errors.email = this.$t('errors.validEmail')
          result = false
        }

        if (!this.email) {
          this.errors.email = this.$t('errors.requiredField')
          result = false
        }

        if (!this.name) {
          this.errors.name = this.$t('errors.requiredField')
        }

        return result
      },
      async bookOffice() {
        if(!this.validate()) {
          return
        }

        const response = await api.bookOfficeToday(this.name, this.email)

        if (response.status === 201) {
          this.success = true
          this.error = false
          this.clearForm()
          return
        }

        this.error = true
        this.success = false

        if(response.data.payload === 'CAPACITY') {
          this.errorMessage = this.$t('officeBooking.capacityOverload')
        } else if(response.data.payload === 'EMAIL_USED') {
          this.errorMessage = this.$t('officeBooking.emailUsed')
        } else if(response.data.payload === 'NOT_TIME_TO_BOOK') {
          this.errorMessage = this.$t('errors.notTimeToBook')
        } else {
          this.errorMessage = this.$t('errors.somethingHappened')
        }
      },
      async reset() {
        await this.getSeatsLeft()
        this.success = null
        this.error = null
      }
    }
  }
</script>

<style scoped>

</style>

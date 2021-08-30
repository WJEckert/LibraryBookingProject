<template>
  <div class="page">
    <h1>{{ $t('createEvent.title') }}</h1>
    <div class="text-left mt-8">
      <div class="mb-4">
        <image-uploader v-model="image"></image-uploader>
        <p class="error" v-if="!image">{{errors.image}}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold" for="email">
          {{ $t('common.title') }}
        </label>
        <input
            @focus="errors.title = ''"
            :class="{'border-red': errors.title}"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email" type="text" :placeholder="$t('common.title')" v-model="title">
        <p class="error">{{ errors.title }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold" for="description">
          {{ $t('createEvent.description') }}
        </label>
        <textarea
            @focus="errors.description = ''"
            :class="{'border-red': errors.description}"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description" type="text" :placeholder="$t('createEvent.description')" v-model="description"></textarea>
        <p class="error">{{ errors.description }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold" for="description">
          {{ $t('createEvent.link') }}
        </label>
        <input
            @focus="errors.link = ''"
            :class="{'border-red': errors.link}"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="link" type="text" :placeholder="$t('createEvent.link')" v-model="link"/>
        <p class="error">{{ errors.link }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold" for="date">
          {{ $t('common.date') }}
        </label>
        <input
            @focus="errors.date = ''"
            :class="{'border-red': errors.date}"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date" type="datetime-local" :placeholder="$t('common.title')" v-model="date">
        <p class="error">{{ errors.date }}</p>
      </div>
      <div class="text-center mt-8">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                @click="createEvent">
          {{$t('common.create')}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ImageUploader from "@/components/Common/ImageUploader/ImageUploader"
import api from '@/services/api'

export default {
  name: "CreateEventPage",
  components: {ImageUploader},
  data() {
    return {
      image: null,
      title: "",
      description: "",
      date: "",
      link: "",
      errors: {
        title: null,
        image: null,
        description: null,
        date: null,
        link: null,
      }
    }
  },
  methods: {
    validate() {
      let result = true

      if(!this.image) {
        this.errors.image = this.$t('errors.requiredField')
        result = false
      }

      if (!this.title) {
        this.errors.title = this.$t('errors.requiredField')
        result = false
      }

      if(!this.description) {
        this.errors.description = this.$t('errors.requiredField')
        result = false
      }

      if(!this.date) {
        this.errors.date = this.$t('errors.requiredField')
        result = false
      }

      if(!this.link) {
        this.errors.link = this.$t('errors.requiredField')
        result = false
      }

      return result
    },
    clearForm() {
      this.image = null
      this.title = null
      this.description = null
      this.link = null
      this.date = null
    },
    async createEvent() {
      if(!this.validate()) {
        return
      }

      const result = await api.createEvent(this.image, this.title, this.description, this.date)
      console.log("TOAST")
      this.$toast.success('You did it!', {
        position: 'top',
        duration: 2000
      });
      this.clearForm()
    }
  }
}
</script>

<style scoped>

</style>

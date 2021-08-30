<template>
  <div class="image-uploader">
    <div class="image">
      <div class="remove" @click="remove" v-if="value">x</div>
      <img :src="src" alt @click="uploadFile" />
      <input type="file" ref="fileInput" @change="imageChange" accept="image/*" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageUploader",
  props: {
    value: {
      type: String
    }
  },
  computed: {
    src() {
      return this.value || require("./add-image.svg")
    }
  },
  methods: {
    remove() {
      this.$emit("input", null)
    },
    uploadFile() {
      this.$refs.fileInput.click()
    },
    imageChange(event) {
      const reader = new FileReader()
      reader.addEventListener(
        "load",
        () => {
          this.$emit("input", reader.result)
        },
        false
      )

      if (event.target.files.length > 0) {
        if(event.target.files[0].size > 4 * 1024 * 1024) { //4mb
          this.$swal('Warning', 'Image is too big', 'warning')
          return
        }
        reader.readAsDataURL(event.target.files[0])
      }
    }
  }
}
</script>

<style scoped>
.image-uploader {
  margin: 2rem auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="file"] {
  display: none;
}

.image {
  width: 250px;
  cursor: pointer;
}

.remove {
  float: right;
  color: red;
  visibility: hidden;
}
.image:hover .remove {
  visibility: visible;
}

img {
  width: 100%;
}
</style>

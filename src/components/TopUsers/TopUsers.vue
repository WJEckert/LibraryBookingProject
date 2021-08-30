<template>
  <div class="page text-left">
    <h1 class="mb-8 text-center">{{ $t('topUsers.title') }}</h1>
    <div>

      <div class="top-user mt-2" v-for="(user, index) in topUsers">
        <v-icon scale="2" class="icon fa-5x" :class="`icon-${index}`" :name="getUserIcon(index)" flip="horizontal"/>
        {{ getUserEmailFirstPart(user._id) }}
        <span class="count">{{ user.count }}</span>
      </div>

    </div>

  </div>
</template>

<script>
import api from "@/services/api"

export default {
  name: "TopUsers",
  data() {
    return {
      topUsers: []
    }
  },
  async created() {
    this.topUsers = await api.getTopUsers()
  },
  methods: {
    getUserEmailFirstPart(email) {
      return email.split('@')[0]
    },
    getUserIcon(index) {
      if (index < 3) {
        return 'trophy'
      } else if (index >= 3) {
        return 'medal'
      }
    }
  }
}
</script>

<style scoped>
.top-user {
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
}

.icon {
  font-size: 2rem;
}

.icon-0, .icon-3 {
  color: gold;
}

.icon-1, .icon-4 {
  color: silver;
}

.icon-2, .icon-5 {
  color: saddlebrown;
}

.count {
  color: var(--red-600);
}
</style>

<script setup lang="ts">
import Home from './view/Home.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const routerTest = () => {
  router.push('/RouterTest')
}
</script>

<template>
  <div v-if="route.path === '/'">
    <Home />
  </div>
  <router-view v-else></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

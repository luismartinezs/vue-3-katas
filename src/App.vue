<template>
  <div class="text-2xl">
    Vue 3 composition API katas
  </div>
  <UserRepositories />
</template>

<script>
import UserRepositories from '@/katas/composition-api/START/UserRepositories.vue'

export default {
  name: "App",
  components: {
    UserRepositories
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <KataNav />
  <div class="mt-4">
    <div v-if="$route.name === 'instructions'">Instructions</div>
    <div v-if="$route.name === 'start'">Start</div>
    <div v-if="$route.name === 'finish'">Finish</div>
  </div>
</template>

<script>
import KataNav from '@/components/KataNav.vue'
export default {
  name: "KataWrapper",
  components: { KataNav },
  setup() {

    return {

    }
  }
};
</script>
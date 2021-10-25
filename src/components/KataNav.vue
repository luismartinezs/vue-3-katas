<template>
  <nav class="w-full">
    <ul class="flex flex-nowrap justify-between items-center">
      <li v-for="{ label, path } in routes" :key="path">
        <router-link
          :to="path"
          class="block py-3 px-6 bg-transparent border-b-2 border-primary-300 text-gray-800 w-44 text-center hover:border-b-4 hover:text-black text-xl"
          :class="{ 'border-b-4 border-primary-500': $route.path === path }"
        >{{ label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: "KataNav",
  components: {},
  setup() {
    const route = useRoute()

    return {
      routes: [
        {
          label: 'Instructions',
          path: `/kata/${route.params.slug}/instructions`
        },
        {
          label: 'Start',
          path: `/kata/${route.params.slug}/start`
        },
        {
          label: 'Finish',
          path: `/kata/${route.params.slug}/finish`
        }
      ]
    }
  }
};
</script>
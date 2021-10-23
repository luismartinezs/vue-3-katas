<template>
  <aside class="overflow-y-auto border-r-2 border-primary-500 z-10 m-0 left-0 bottom-0">
    <ul class="py-6 m-0">
      <li v-for="{ label, path } in menuItems">
        <router-link :to="path" class="pl-8 border-l-1 border-transparent py-2 px-4 leading-snug w-full">{{ label }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "TheSidebar",
  components: {},
  setup() {
    return {
      menuItems: [
        {
          label: 'Start here',
          path: '/start-here'
        }
      ]
    }
  }
};
</script>
<template>
  <TheHeader :class="`h-${headerHeight}`">
    <template #title>Vue 3 composition API katas</template>
  </TheHeader>
  <TheSidebar class="fixed" :class="`top-${headerHeight} w-${sidebarWidth}`" />
  <TheContent :class="`pt-${headerHeight} pl-${sidebarWidth}`" />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheContent from '@/components/TheContent.vue'


export default {
  name: "App",
  components: {
    TheHeader,
    TheSidebar,
    TheContent
  },
  setup() {
    return {
      headerHeight: 14, // w-14 top-14,
      sidebarWidth: 80 // w-80 pl-80
    }
  }
}
</script>
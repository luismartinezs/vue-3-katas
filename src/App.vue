<template>
  <DashboardLayout>
    <template #header>
      <TheHeader>
        <template #title>Vue 3 composition API katas</template>
      </TheHeader>
    </template>
    <template #sidebar>
      <TheSidebar />
    </template>
    <template #content>
      <TheContent />
    </template>
  </DashboardLayout>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheContent from '@/components/TheContent.vue'
import DashboardLayout from '@/components/DashboardLayout.vue'

export default {
  name: "App",
  components: {
    TheHeader,
    TheSidebar,
    TheContent,
    DashboardLayout
  },
}
</script>
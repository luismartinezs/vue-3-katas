<template>
  <header class="fixed z-20 top-0 left-0 right-0" :class="`h-${headerHeight}`">
    <slot name="header"></slot>
  </header>
  <aside
    class="fixed overflow-y-auto border-r-2 border-primary-500 z-10 m-0 left-0 bottom-0"
    :class="`top-${headerHeight} w-${sidebarWidth}`"
  >
    <slot name="sidebar"></slot>
  </aside>
  <main class="block pb-8" :class="`pt-${headerHeight} pl-${sidebarWidth}`">
    <slot name="content"></slot>
  </main>
</template>

<script>
export default {
  name: "DashboardLayout",
  setup() {
    return {
      headerHeight: 14, // w-14 top-14,
      sidebarWidth: 80 // w-80 pl-80
    }
  }
};
</script>
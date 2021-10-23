<template>
  <div class="bg-primary fixed z-20 top-0 left-0 right-0 py-3 px-6 text-2xl">
    <slot name="title"></slot>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  setup() {
    return {

    }
  }
};
</script>
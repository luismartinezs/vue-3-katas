<template>
  <StandardWrapper class="bg-primary py-2">
    <div class="text-2xl">
      <slot name="title"></slot>
    </div>
  </StandardWrapper>
</template>

<script>
import StandardWrapper from '@/components/StandardWrapper.vue'
export default {
  name: "TheHeader",
  components: { StandardWrapper },
  setup() {
    return {

    }
  }
};
</script>
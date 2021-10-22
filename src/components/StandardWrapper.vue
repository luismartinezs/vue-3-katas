<template>
  <div>
    <WidthWrapper>
      <slot name="default"></slot>
    </WidthWrapper>
  </div>
</template>

<script>
import WidthWrapper from '@/components/WidthWrapper.vue'
export default {
  name: "StandardWrapper",
  components: {
    WidthWrapper
  },
  setup() {
    return {

    }
  }
};
</script>
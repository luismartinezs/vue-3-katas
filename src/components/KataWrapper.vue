<template>
  <KataNav />
  <span>{{$route.params.slug}}</span>
</template>

<script>
import KataNav from '@/components/KataNav.vue'
export default {
  name: "KataWrapper",
  components: {KataNav},
  setup () {
    return {

    }
  }
};
</script>
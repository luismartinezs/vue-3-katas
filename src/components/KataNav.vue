<template>
  <nav class="w-full">
    <ul class="flex flex-nowrap justify-between items-center">
      <li>
        <router-link :to="`/kata/${$route.params.slug}/instructions`">Instructions</router-link>
      </li>
      <li>
        <router-link :to="`/kata/${$route.params.slug}/start`">Start</router-link>
      </li>
      <li>
        <router-link :to="`/kata/${$route.params.slug}/finish`">Finish</router-link>
      </li>
    </ul>
  </nav>
</template>
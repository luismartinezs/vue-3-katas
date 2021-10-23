<template>
  <nav>
    <ul class="flex flex-nowrap">
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
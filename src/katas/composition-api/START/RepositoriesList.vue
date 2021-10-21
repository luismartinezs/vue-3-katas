<template>
  <ul v-for="repo in repositories">
    <li>
      <a :href="repo.html_url">
        {{repo.name}}
      </a>
    </li>
  </ul>
</template>repositories

<script>
export default {
  name: "RepositoriesList",
  props: {
    repositories: {
      type: Array,
      default: []
    }
  }
}
</script>
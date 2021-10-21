<template>
  <div>
    REPOSITORIES
  </div>
</template>

<script>
export default {
  // components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      repositories: [], // 1
      filters: {
        // filters
       }, // 3
      searchQuery: '' // 2
    }
  },
  computed: {
    filteredRepositories () {
      // filter
     }, // 3
    repositoriesMatchingSearchQuery () {
      // search query
     }, // 2
  },
  watch: {
    user: 'getUserRepositories' // 1
  },
  methods: {
    getUserRepositories () {
      // using `this.user` to fetch user repositories
    }, // 1
    updateFilters () {
      // do the update
     }, // 3
  },
  mounted () {
    this.getUserRepositories() // 1
  }
}
</script>

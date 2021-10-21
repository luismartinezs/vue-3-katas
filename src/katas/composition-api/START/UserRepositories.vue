<template>
  <div>
    <label for="githubUser">
      Github user
      <input id="githubUser" type="text" v-model="user" />
    </label>
    <button @click="handleClick">search repos</button>
    <RepositoriesList :repositories="repositories" />
  </div>
</template>

<script>
import RepositoriesList from './RepositoriesList.vue'

export default {
  components: {
    // RepositoriesFilters,
    // RepositoriesSortBy,
    RepositoriesList
  },
  // props: {
  //   user: {
  //     type: String,
  //     required: true
  //   }
  // },
  data() {
    return {
      repositories: [], // 1
      filters: {
        // filters
      }, // 3
      searchQuery: '', // 2
      user: 'luismartinezs'
    }
  },
  computed: {
    filteredRepositories() {
      // filter
    }, // 3
    repositoriesMatchingSearchQuery() {
      // search query
    }, // 2
  },
  // watch: {
  //   user: 'getUserRepositories' // 1
  // },
  methods: {
    async getUserRepositories() {
      // using `this.user` to fetch user repositories
      try {
        const res = await fetch(`https://api.github.com/users/${this.user}/repos?per_page=100`)
        return res.json()
      } catch (err) {
        console.error(err)
        return []
      }
    }, // 1
    updateFilters() {
      // do the update
    }, // 3
    async handleClick () {
      this.repositories = await this.getUserRepositories()
    }
  },
  async mounted() {
    this.repositories = await this.getUserRepositories() // 1
  }
}
</script>

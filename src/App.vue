<template>
  <GithubPopularRepos/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GithubPopularRepos from './components/GithubPopularRepos.vue';

export default defineComponent({
  name: 'App',
  components: {
    GithubPopularRepos
  }
});
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

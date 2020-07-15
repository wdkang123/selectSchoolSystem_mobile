<template>
  <div id="app">
    <IndexPage />
  </div>
</template>

<script>
import IndexPage from './components/IndexPage.vue'

export default {
  name: 'App',
  components: {
    IndexPage
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

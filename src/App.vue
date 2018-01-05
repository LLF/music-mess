<template>
  <div id="app">
    <test-header></test-header>
    <!--
    <test-container></test-container>
    <test-player></test-player>
    -->
  </div>
</template>

<script>
import TestHeader from '@/components/TestHeader/TestHeader'

export default {
  name: 'app',
  components: {
    TestHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

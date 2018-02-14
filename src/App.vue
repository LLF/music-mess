<template>
  <div id="app">
    <test-header></test-header>
    <test-tab></test-tab>
    <!--
    <test-container></test-container>
    -->
    <router-view></router-view>
    <test-player></test-player>
  </div>
</template>

<script>
import TestHeader from '@/components/TestHeader/TestHeader'
import TestTab from '@/components/TestTab/TestTab'
import TestPlayer from '@/components/TestPlayer/TestPlayer'

export default {
  name: 'app',
  components: {
    TestHeader,
    TestTab,
    TestPlayer
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

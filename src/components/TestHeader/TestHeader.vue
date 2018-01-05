<template>
  <div class="test-header">
    <div class="icon-logo"></div>
    <h1 class="title">Music Mess</h1>
    
    <i class="logo-user"></i>

    <!--
    <router-link to="/user" tag="div">
      <i class="logo-user"></i>
    </router-link>
    -->
  </div>
</template>

<script>
export default {
  name: 'TestHeader'
}
</script>

<style lang="scss">
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixins.scss';

  .test-header {
    position: relative;
    text-align: center;
    height: 60px;
    color: $color-theme;
    .title {
      display: inline-block;
      vertical-align: middle;
      font-size: $font-size-large;
    }
    .icon-logo {
      display: inline-block;
      vertical-align: middle;
      height: 50px;
      width: 80px;
      @include bg-image('xianyu');
      background-size: 80px 50px;
    }
    .icon-user {
      display: inline-block;
    }
  }
</style>

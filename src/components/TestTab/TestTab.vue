<template>
  <div class="tab-container">
    <div class="test-tab">
      <router-link tag="div" class="tab-item" :to="{name: 'recommend'}">
        <span class="tab-link">推荐</span>
      </router-link>
      <router-link tag="div" class="tab-item" :to="{name: 'singer'}">
        <span class="tab-link">歌手</span>
      </router-link>
      <router-link tag="div" class="tab-item" :to="{name: 'rank'}">
        <span class="tab-link">排行</span>
      </router-link>
      <router-link tag="div" class="tab-item" :to="{name: 'search'}">
        <span class="tab-link">搜索</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "~@/assets/scss/const.scss";

  .tab-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    background-color: $color-sub-theme;
    .test-tab {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 800px;
      .tab-item {
        flex: 1;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $color-text;
        font-size: $font-size-medium; 
        &:hover {
          font-size: $font-size-medium-x;
          color: $color-text-d;
        }
      }
    }
  }
</style>

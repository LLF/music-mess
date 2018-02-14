<template>
  <div 
    class="test-member-list"
  >
    <!-- Left Member Profile List -->
    <ul>
      <li class="list-group" v-for="group in members" :key="group.title">
        <h2 class="list-group-title">{{ group.title }}</h2>
        <ul>
          <li class="list-group-item" v-for="(item, index) in group.items" :key="index">
            <img :src="item.avatar" class="member-avatar">
            <span class="member-name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <!-- Right Alphabet List -->
    <div class="alphabet-list">
      <ul>
        <li class="alphabet-item">
        </li>
      </ul>
    </div>
    <!-- Fixed Title -->
    <div class="fixed-title-part">
      <h1 class="fixed-title"></h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    members: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/const.scss";

.test-member-list {
  overflow: scroll;

  .list-group {
    padding-bottom: 15px;
    .list-group-title {
      line-height: 30px;
      height: 30px;
      font-size: $font-size-small;
      color: $color-theme;
      background-color: $color-dialog-background;
    }
    .list-group-item {
      padding-top: 15px;
      padding-left: 20px;
      display: flex;
      align-items: center;
      .member-avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      .member-name {
        margin-left: 20px;
        font-size: $font-size-medium;
      }
    }
  }
}
</style>

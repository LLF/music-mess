<template>
  <div class="singer-container">
    <test-member-list ref="listRef" :members="singers"></test-member-list>
  </div>
</template>

<script>
import TestMemberList from "@/components/Common/TestMemberList/TestMemberList"
import { getSingerList } from "@/api/singerApi"
import { createSinger } from "@/class/SingerClass"

const HOT_NUM = 10
const HOT_TITLE = "hot"

export default {
  components: {
    TestMemberList
  },
  data () {
    return {
      singers: []
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
    _getSingerList() {
      getSingerList().then((res) => {
        if (res.code === 0) {
          console.log(res)
          // console.log(this._formatSingers(res.data.list))
          this.singers = this._formatSingers(res.data.list)
        }
      })
    },
    
    _formatSingers(list) {
      let map = {
        hot: {
          title: HOT_TITLE,
          items: []
        }
      }

      // 填充歌手数据
      list.forEach((item, index) => {
        // 填充热门歌手数据
        if (index < HOT_NUM) {
          map.hot.items.push(createSinger(item))
        }

        // 填充 a-z 字母
        let key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }

        // 填充对应字母歌手数据
        map[key].items.push(createSinger(item))
      })

      // 得到有序列表
      let hot = []
      let others = []

      for (let key in map) {
        let value = map[key]
        if (value.title.match(/[a-zA-Z]/)) {
          others.push(value)
        } else if (value.title === HOT_TITLE) {
          hot.push(value)
        }
      }

      others.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })

      console.log(hot.concat(others))
      return hot.concat(others)
    }
  }
}
</script>


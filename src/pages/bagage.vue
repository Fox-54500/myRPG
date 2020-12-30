<template>
  <div class="bagage">
    <div class="bagage-header">物品栏</div>
    <div class="bagage-content">
      <template v-for="item in bagage" :key="item.id">
        <item :detail="item"/>
      </template>
    </div>
  </div>
</template>

<script>
import Item from '/@/components/Item/Item.vue'
import { mapState } from 'vuex'

export default {
  name: "bagage",
  data() {
    return {
      bagage: [],
    }
  },
  computed: {
    ...mapState([
      'player',
      'itemList'
    ]),
  },
  watch: {},
  components: {
    Item
  },
  methods: {
    fillItemList() {
      const itemList = []
      this.itemList.forEach(item => {
        const find = this.player.bagage.find(it => it.id === item.id)
        if (find) {
          itemList.push({
            ...item,
            count: find.count
          })
        }
      })
      this.bagage = itemList
    }
  },
  created() {
    this.fillItemList()
  },
}
</script>

<style lang="scss" scoped>
.bagage {
  &-header {
  }

  &-content {

  }
}
</style>

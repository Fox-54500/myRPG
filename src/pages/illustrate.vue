<template>
  <div class="illustrate">
    <div class="illustrate-header"></div>
    <div class="illustrate-content" flexbox>
      <template v-for="item in itemList" :key="item.id">
        <item :detail="item" :show-menu="false"/>
      </template>
    </div>
  </div>
</template>

<script>
import data from '../item.json'
import Item from '@/components/Item/Item.vue'

export default {
  name: "illustrate",
  data() {
    return {
      itemList: data
    }
  },
  components: {
    Item
  },
  watch: {},
  methods: {},
  created() {
    console.log(data)
  },
}
</script>

<style lang="scss" scoped>
.illustrate {
  &-header {
  }
}
</style>

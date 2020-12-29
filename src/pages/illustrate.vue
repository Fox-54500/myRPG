<template>
  <div class="bagage">
    <div class="bagage-header"></div>
    <div class="bagage-content">
      <template v-for="item in itemList" :key="item.id">
        <div class="bagage-content-item">
          {{item.name}}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import data from '../item.json'

export default {
  name: "bagage",
  data() {
    return {
      itemList: data
    }
  },
  components: {},
  watch: {},
  methods: {},
  created() {
    console.log(data)
  },
}
</script>

<style lang="scss" scoped>
.bagage {
  &-header {
  }
}
</style>

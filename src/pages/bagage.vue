<template>
  <div class="bagage">
    <div class="bagage-header">物品栏</div>
    <div class="bagage-money">{{player.money}}</div>
    <div class="bagage-content" flexbox>
      <template v-for="item in playerBagage" :key="item.id">
        <item :detail="item"/>
      </template>
    </div>
  </div>
</template>

<script>
import Item from '/@/components/Item/Item.vue'
import Event from '../origin/Event'
import { mapState, mapGetters } from 'vuex'

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
    ...mapGetters([
      'playerBagage'
    ])
  },
  watch: {},
  components: {
    Item
  },
  methods: {
  },
  created() {
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

<template>
  <div class="item">
    <div class="item-content" :style="{color}" @click.left.prevent="" @click.right.prevent="">
      {{detail.name}}
    </div>
    <detail
      :detail="detail"
      :color="color"
    />
  </div>
</template>

<script>
import { qualityColor } from '../../const/ItemConst';
import Detail from './ItemDetail.vue'

export default {
  name: 'item',
  props: {
    detail: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  components:{
    Detail
  },
  computed: {
    color() {
      return qualityColor[this.detail.quality]
    }
  },
  methods: {},
  created() {
  },
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  margin: 10px;

  &-content {
    width: 80px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    padding: 10px;
    border: 1px solid #888;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;
  }
}
</style>

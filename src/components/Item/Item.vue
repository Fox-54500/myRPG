<template>
  <div class="item">
    <div class="item-content" :style="{color}" @click.left.prevent.stop="detailShowHandle" @click.right.prevent="optionsShowHandle">
      {{detail.name}}
    </div>
    <detail v-if="detailShow"
      :detail="detail"
      :color="color"
    />
    <options v-if="optionsShow"
      :detail="detail"
    />
  </div>
</template>

<script>
import { qualityColor } from '../../const/ItemConst';
import Detail from './ItemDetail.vue'
import Options from './ItemOptions.vue'
import Event from '../../origin/Event'

export default {
  name: 'item',
  props: {
    detail: {
      type: Object,
      default() {
        return {}
      }
    },
    showMenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      detailShow: false,
      optionsShow: false,
      eventId: 0,
    }
  },
  components: {
    Detail,
    Options,
  },
  computed: {
    color() {
      return qualityColor[this.detail.quality]
    }
  },
  methods: {
    detailShowHandle() {
      Event.$emit('closeAll')
      this.detailShow = true
    },
    optionsShowHandle() {
      if (!this.showMenu) {
        return
      }
      Event.$emit('closeAll')
      this.optionsShow = true
    }
  },
  created() {
    this.eventId = Event.$on('closeAll', () => {
      this.detailShow = false
      this.optionsShow = false
    })
  },
  beforeUnmount() {
    Event.$off(this.eventId)
  }
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

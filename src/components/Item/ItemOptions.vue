<template>
  <div class="ItemOptions">
    <button
      class="ItemOptions-option"
      v-if="detail.classId===4"
      @click="useItem"
    >
      使用
    </button>
    <button
      class="ItemOptions-option"
      v-if="detail.classId===1"
    >
      装备
    </button>
    <button
      class="ItemOptions-option"
      v-if="detail.id!==1&&detail.classId!==3"
      @click="saleItem"
    >
      出售
    </button>
    <!-- todo: 分解系统-->
    <!--<button
      class="ItemOptions-option"
      v-if="detail.id!==1"
    >
      分解
    </button>-->
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: "ItemOptions",
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
  components: {},
  watch: {},
  methods: {
    ...mapActions([
      'saleItemHandle',
      'useItemHandle',
    ]),
    useItem() {
      this.useItemHandle({
        id: this.detail.id,
        count: this.detail.count - 1
      })
    },
    saleItem() {
      this.saleItemHandle({
        id: this.detail.id,
        count: this.detail.count - 1
      })
    },
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
.ItemOptions {
  position: absolute;
  left: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  &-option {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px 20px;
    background: white;
    margin-bottom: 4px;
    cursor: pointer;
  }
}
</style>

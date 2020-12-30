<template>
  <div class="ItemDetail">
    <div class="ItemDetail-name">{{detail.name}}</div>
    <div class="ItemDetail-desc">{{detail.desc}}</div>
    <div class="ItemDetail-desc" v-if="detail.affect.maxHp">
      +{{detail.affect.maxHp}}生命值
    </div>
    <div class="ItemDetail-desc" v-if="detail.affect.maxMp">
      +{{detail.affect.maxMp}}精力
    </div>
    <div class="ItemDetail-desc" v-if="detail.affect.strength">
      +{{detail.affect.strength}}力量
    </div>
    <div class="ItemDetail-desc" v-if="detail.affect.agility">
      +{{detail.affect.agility}}敏捷
    </div>
    <div class="ItemDetail-desc" v-if="detail.affect.intelligence">
      +{{detail.affect.intelligence}}智力
    </div>
    <div class="ItemDetail-desc" v-if="detail.affect.lucky">
      +{{detail.affect.lucky}}幸运
    </div>
    <div class="ItemDetail-desc" v-if="detail.equipAttr.attack">
      +{{detail.equipAttr.attack}}攻击力
    </div>
    <div class="ItemDetail-desc" v-if="detail.equipAttr.defense">
      +{{detail.equipAttr.defense}}防御力
    </div>
  </div>
</template>

<script>
import { quality, classification, slot } from '../../const/ItemConst'

export default {
  name: "ItemDetail",
  props: {
    detail: {
      type: Object,
      default() {
        return {}
      }
    },
    color: {
      type: String,
      default: 'black'
    },
  },
  data() {
    return {}
  },
  watch: {},
  methods: {},
  created() {
  },
}
</script>

<style lang="scss" scoped>
.ItemDetail {
  position: absolute;
  left: 0;
  top: 50px;
  width: 200px;
  height: 300px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;

  &-desc, &-name {
    font-size: 14px;
    text-align: center;
  }

  &-name {
    font-size: 16px;
    margin-bottom: 5px;
  }
}
</style>

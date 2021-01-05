<template>
  <div class="ItemDetail" @click="handle">
    <div class="ItemDetail-name" :style="{color}">
      {{detail.name}}
      <span v-if="detail.count > 1">
        *{{detail.count}}
      </span>
    </div>

    <div class="ItemDetail-info" v-if="detail.classId===1">
      {{classification[detail.classId]}}: {{slot[detail.slot]}}
    </div>

    <div class="ItemDetail-info" v-else>
      {{classification[detail.classId]}}
    </div>

    <div class="ItemDetail-info" v-if="detail.affect.maxHp">
      +{{detail.affect.maxHp}} 生命值
    </div>
    <div class="ItemDetail-info" v-if="detail.affect.maxMp">
      +{{detail.affect.maxMp}} 精力
    </div>
    <div class="ItemDetail-info" v-if="detail.affect.strength">
      +{{detail.affect.strength}} 力量
    </div>
    <div class="ItemDetail-info" v-if="detail.affect.agility">
      +{{detail.affect.agility}} 敏捷
    </div>
    <div class="ItemDetail-info" v-if="detail.affect.intelligence">
      +{{detail.affect.intelligence}} 智力
    </div>
    <div class="ItemDetail-info" v-if="detail.affect.lucky">
      +{{detail.affect.lucky}} 幸运
    </div>
    <div class="ItemDetail-info" v-if="detail.equipAttr.attack">
      +{{detail.equipAttr.attack}} 攻击力
    </div>
    <div class="ItemDetail-info" v-if="detail.equipAttr.defense">
      +{{detail.equipAttr.defense}} 防御力
    </div>


    <div class="ItemDetail-desc" style="color: #888">{{detail.desc}}</div>
  </div>
</template>

<script>
import { quality, classification, slot } from '../../const/ItemConst'
import Event from '../../origin/Event'

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
    return {
      classification,
      slot,
      quality,
    }
  },
  watch: {},
  methods: {
    handle() {
    }
  },
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
  min-height: 250px;
  text-align: center;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  z-index: 99;

  &-info, &-name {
    font-size: 14px;
  }

  &-name {
    font-size: 16px;
    margin-bottom: 5px;
  }

  &-desc {
    font-size: 12px;
    margin-top: 12px;
    color: #888;
  }
}
</style>

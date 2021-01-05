<template>
  <div class="player">
    <div class="player-header">
      角色状态
    </div>
    <!-- 装备信息 -->
    <div class="player-info" flexbox>
      <!-- 头像 -->
      <div class="player-info-avatar"></div>
      <!-- 装备槽 -->
      <div class="player-info-equip">
        <!-- 头部 -->
        <div class="player-info-equip-head"></div>
        <!-- 身体 -->
        <div class="player-info-equip-body"></div>
        <!-- 手套 -->
        <div class="player-info-equip-hand"></div>
        <!-- 鞋子 -->
        <div class="player-info-equip-foot"></div>
        <!-- 武器 -->
        <div class="player-info-equip-weapon"></div>
        <!-- 戒指 -->
        <div class="player-info-equip-ring"></div>
        <!-- 项链 -->
        <div class="player-info-equip-necklace"></div>
      </div>
    </div>

    <!-- 角色信息 -->
    <div class="player-state" flexbox>
      <!-- 基本信息 -->
      <div class="player-state-basic">
        <template v-for="field in BasicInfo" :key="field">
          <div class="player-state-basic-row" flexbox justify="between">
            <div class="player-state-basic-row-field">
              {{field[1]}}:
            </div>
            <div class="player-state-basic-row-value">
              {{player[field[0]]}}
            </div>
          </div>
        </template>
        <div class="player-state-basic-row" flexbox justify="between">
          <div class="player-state-basic-row-field">
            经验值:
          </div>
          <div class="player-state-basic-row-value">
            {{player['experience']}}/{{player['levelUpExp']}}
          </div>
        </div>
      </div>

      <!-- 属性信息 -->
      <div class="player-state-ability">
        <template v-for="field in Ability" :key="field">
          <div class="player-state-ability-row" flexbox justify="between">
            <div class="player-state-ability-row-field">
              {{field[1]}}: {{player.ability[field[0]] + addAbility[field[0]]}}
            </div>
            <div class="player-state-ability-row-value">

              <button class="player-state-ability-row-value-btn" @click="add(field[0])" :disabled="validPoint<=0">
                +
              </button>
              <button class="player-state-ability-row-value-btn" @click="minus(field[0])" :disabled="validPoint>=player.point">
                -
              </button>
            </div>
          </div>
        </template>

        <div flexbox>
          <div style="margin-left: auto">
            可用能力点: {{validPoint}}
          </div>
        </div>

        <div flexbox>
          <button style="margin-left: auto" @click="confirmPoint">
            确认加点
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Ability, BasicInfo } from '/@/const/PlayerInfo'
import { abilityOperate } from "/@/const/OperateNumber";
import { mapState } from 'vuex'

export default {
  name: "player",
  data() {
    const addAbility = {}
    Ability.forEach(item => addAbility[item[0]] = 0)
    return {
      Ability,
      BasicInfo,
      // 缓存可用能力点
      validPoint: 0,
      // 缓存加点
      addAbility
    }
  },
  computed: {
    ...mapState(['player']),
  },
  components: {},
  watch: {},
  methods: {
    add(ability) {
      this.addAbility[ability] += abilityOperate[ability]
      this.validPoint--
    },
    minus(ability) {
      this.addAbility[ability] -= abilityOperate[ability]
      this.validPoint++
    },
    confirmPoint() {
      this.$store.commit('addPoint', this.addAbility)
      this.player.point = this.validPoint
    }
  },
  created() {
    this.validPoint = this.player.point
  },
}
</script>

<style lang="scss" scoped>
.player {
  &-header {
    margin-top: 15px;
  }
  &-info {
    margin-top: 10px;
    &-avatar {
      width: 150px;
      height: 270px;
      /*background: aqua;*/
    }

    &-equip {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      grid-auto-rows: minmax(20px, auto);
      margin-left: 20px;
      * {
        width: 60px;
        height: 60px;
        /*background: aquamarine;*/
      }
      &-head {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row: 1;
        margin-left: 70px;
      }

      &-body {
        grid-column: 1;
      }

      &-hand {
        grid-column: 3;
      }

      &-foot {
        grid-column: 1;
      }

      &-weapon {
        grid-column: 3;
      }

      &-ring {
        grid-column: 1;
      }

      &-necklace {
        grid-column: 3;
      }

    }
  }

  &-state {
    &-basic {
      width: 150px;

      &-row {
        &-field {
        }

        &-value {
        }
      }
    }

    &-ability {
      width: 200px;
      margin-left: 20px;

      &-row {
        &-field {
        }

        &-value {
          &-btn {
            width: 20px;
          }
        }
      }
    }
  }
}
</style>

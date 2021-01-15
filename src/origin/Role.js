import Sex from '../const/Sex'
import Level from '../const/Level'
import Message from "./Message";
import { DAMAGE_TYPE } from "../const/TypeMap";

function damageCalc(damage, defense) {
  const result = Math.round(damage - defense)
  return Math.max(1, result)
}

export default class Role {
  // 角色名称
  name = ''
  // 性别id
  sexId = 1
  // 等级
  level = 1
  // 角色状态
  state = {
    hp: 20,
    mp: 10,
  }
  // 能力加点
  ability = {
    maxHp: 20,
    maxMp: 10,
    strength: 4,
    agility: 4,
    intelligence: 4,
    lucky: 4,
  }
  // 装备栏
  equip = {}
  // 经验值
  experience = 0
  // 已有能力点
  point = 0
  // 背包
  bagage = [
    {
      id: 1,
      count: 10
    },
    {
      id: 5,
      count: 1
    },
  ]
  // 是否为主角阵营
  isAct = true
  // 战斗消息队列
  _battleMessage = null
  critRate = 2

  skill = []
  isDead = false

  get sex() {
    return Sex[this.sexId]
  }

  get levelUpExp() {
    return Level[this.level]
  }

  get attack() {
    let atk = 0
    atk += this.ability.strength
    for (const equipKey in this.equip) {
      const equip = this.equip[equipKey]
      atk += equip.equipAttr.attack
    }
    return atk
  }

  get defense() {
    let dfs = 0
    dfs += this.ability.strength / 2
    for (const equipKey in this.equip) {
      const equip = this.equip[equipKey]
      dfs += equip.equipAttr.defense
    }
    return dfs
  }

  get money() {
    return this.bagage.find(item => item.id === 1).count
  }

  get speed() {
    const maxAbility = Math.max(
      this.ability.strength,
      this.ability.agility,
      this.ability.intelligence,
      this.ability.lucky
    )

    return this.ability.agility + maxAbility * 0.3
  }

  get dodge() {
    const fromAibility = this.ability.lucky / (100 + this.ability.lucky)
    return fromAibility
  }

  get critic() {
    const fromAibility = this.ability.lucky / (100 + this.ability.lucky)
    return fromAibility
  }

  get battleMessage() {
    return this._battleMessage ? this._battleMessage.message : []
  }

  constructor(role, isAct = true) {
    this.ability.strength = role.strength
    this.ability.agility = role.agility
    this.ability.intelligence = role.intelligence
    this.ability.lucky = role.lucky
    this.name = role.name
    this.sexId = role.sexId
    this.point = role.point ? role.point : 0
    this.isAct = isAct
  }

  damage(obj) {
    const critRand = Math.random()
    const dodgeRand = Math.random()

    if (this.state.mp > 0) {
      this.state.mp -= 1
      if (dodgeRand <= obj.dodge) {
        return {
          damage: 0,
          cost: 1,
          type: DAMAGE_TYPE.miss
        }
      } else {
        let damage = damageCalc(this.attack, obj.defense)
        if (critRand <= this.critic) {
          damage *= this.critRate
        }
        obj.getHurt(damage)
        return {
          damage,
          cost: 1,
          type: DAMAGE_TYPE.hit
        }
      }
    } else {
      return {
        damage: 0,
        cost: 1,
        type: DAMAGE_TYPE.noMp
      }
    }
  }

  die() {
    this.isDead = true
    this.state.hp = 0
  }

  getHurt(damage) {
    this.state.hp -= damage
    if (this.state.hp <= 0) {
      this.die()
    }
  }

  resetState(battle) {
    this.state.hp = this.ability.maxHp
    this.state.mp = this.ability.maxMp
    this.isDead = false
    this._battleMessage = new Message(battle.animationSpeed)
  }

  use(item) {

  }

}
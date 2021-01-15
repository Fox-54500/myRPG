import Sex from '../const/Sex'
import Level from '../const/Level'

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

  // 主角队伍
  isAct = true

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

  damage(obj) {
    obj.getHurt(this.ability.strength)
  }

  die() {
    this.isDead = true
    this.state.hp = 0
  }

  getHurt(damage) {
    console.log('造成了' + damage + '的伤害')
    this.state.hp -= damage
    if (this.state.hp <= 0) {
      this.die()
    }
  }

  resetState() {
    this.state.hp = this.ability.maxHp
    this.state.mp = this.ability.maxMp
    this.isDead = false
  }

  use(item) {

  }

}
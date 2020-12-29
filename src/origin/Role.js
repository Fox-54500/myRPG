import Sex from '../const/Sex'
import Level from '../const/Level'

export default class Role {
  name = ''
  sexId = 1
  level = 1
  state = {
    hp: 20,
    mp: 10,
  }
  ability = {
    maxHp: 20,
    maxMp: 10,
    strength: 4,
    agility: 4,
    intelligence: 4,
    lucky: 4,
  }
  equip = {}
  experience = 0

  constructor(role) {
    this.ability.strength = role.strength
    this.ability.agility = role.agility
    this.ability.intelligence = role.intelligence
    this.ability.lucky = role.lucky
    this.name = role.name
    this.sexId = role.sexId
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

  damage(obj) {
    obj.getHurt(this.ability.strength)
  }

  die() {
    this.isDead = true
  }

  getHurt(damage) {
    this.state.hp -= damage
    if (this.state.hp <= 0) {
      this.die()
    }
  }

  use(item) {

  }
}
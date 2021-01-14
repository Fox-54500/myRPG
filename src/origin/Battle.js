export default class Battle {
  timer = null
  speed = 1000
  originSpeed = 1000
  queue = []
  players = []
  enemys = []
  // 回合数
  round = 1
  // 游戏仅支持以下速度
  speedRules = [0.5, 1, 2, 5, 10]
  isOver = true

  constructor(players, enemys) {
    this.players = players
    this.enemys = enemys
    this.queue = [...players, ...enemys].sort((a, b) => b.speed - a.speed)
  }

  battleStart() {
    this.isOver = false
    this.queue.forEach(item => item.resetState())
    this.handler(0)
  }

  handler(i) {
    this.timer = setTimeout(() => {
      const curRole = this.queue[i]
      const target = this.selectTarget(curRole)
      curRole.damage(target)
      const goOn = this.assessResult()
      if (goOn) {
        // 队列结束应该开始新一回合
        if (i < this.queue.length - 1) {
          this.handler(i + 1)
        } else {
          this.round++
          this.handler(0)
        }
      } else {
        this.isOver = true
      }
    }, this.speed)
  }

  selectTarget(role) {
    // 目前仅支持1对1
    return role.isAct ? this.enemys[0] : this.players[0]
  }

  sortQueue() {
    this.queue = this.queue.sort((a, b) => b.speed - a.speed)
  }

  addSpeed(times) {
    if (!this.speedRules.includes(times)) {
      return
    }
    this.speed = this.originSpeed * times
  }

  resetSpeed() {
    this.addSpeed(1)
  }

  assessResult() {
    if (this.playerWin) {
      this.winHandle()
      return false
    }
    if (this.enemyWin) {
      this.loseHandle()
      return false
    }

    return true
  }

  winHandle() {
    console.log('主角团胜利')
  }

  loseHandle() {
    console.log('主角团失利')
  }

  get playerWin() {
    return this.enemys.every(enemy => enemy.isDead)
  }

  get enemyWin() {
    return this.players.every(player => player.isDead)
  }
}
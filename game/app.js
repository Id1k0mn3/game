const game = Vue.createApp({
  data() {
    return {
      healthbarPlayer: 100,
      healthbarMonster: 100,
      dis: false,
      countCLicks: 0,
      battleLog: [],
      endGame: true,
    }
  },
  methods: {
    monsterDamg() {
      let damagePlayer = Math.floor(Math.random() * 7)
      this.healthbarPlayer -= damagePlayer
      this.battleLog.push('Герой получил урона: ' + damagePlayer)
    },
    countClick() {
      this.countCLicks++
      if(this.countCLicks >= 3) {
        this.countCLicks = 0
        this.dis = false
      }
    },
    attackPlayer() {
      let damageMonster = Math.floor(Math.random() * 20)
      this.healthbarMonster -= damageMonster
      this.battleLog.push('Монстр получил урона: ' + damageMonster)
      this.monsterDamg()
      if(this.healthbarPlayer <= 0) {
        this.healthbarPlayer = 0
        alert('win Monster')
      }
      if(this.healthbarMonster <= 0) {
        this.healthbarMonster = 0
        alert('win User')
      }
      this.countClick()
    },
    specialAttackPlayer() {
      this.countClicks = 0
      //this.firstCLick++
      let damageMonster = Math.floor(Math.random() * 20)
      this.healthbarMonster -= damageMonster * 2
      this.dis = true
      this.battleLog.push('Cупер удар нанес урона: ' + damageMonster * 2)
      this.monsterDamg()
    },
    healHero() {
      this.monsterDamg()
      if(this.healthbarPlayer <= 100) {
        let healPlayer = Math.floor(Math.random() * 50)
        this.healthbarPlayer += healPlayer
        if(this.healthbarPlayer >= 100) {
          this.healthbarPlayer = 100
        }
        this.battleLog.push('Герой вылечился на: ' + healPlayer)
      }
      this.countClick()
    },
    surrend() {
      this.endGame = !this.endGame
    },
  },
})

game.mount('#game')
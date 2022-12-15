function randomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const ctx = document.getElementById('canvas').getContext('2d')

const game = new Game(ctx)

game.start()
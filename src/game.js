class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.bg = new Background(ctx);
    this.survivor = new Survivor(ctx);
    this.enemies = []

    this.setListeners();
  }

  start() {
    let counter = 0
    setInterval(() => {
      this.clear();
      this.draw(counter);
      counter ++
    }, 10)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw(counter) {
    this.bg.draw();
    this.survivor.draw();
    this.enemies.forEach((enemy) => {
      enemy.draw()
      if(counter % 5 === 0) {
        enemy.moveCloser({ x: this.survivor.x, y: this.survivor.y })
      }
      })
    if (counter % 800 === 0) {
      const randomX = randomNumber(0, this.ctx.canvas.width)≥
      const randomY = randomNumber(0, this.ctx.canvas.height)
      // this.enemies.push(new Enemy(this.ctx, randomX, randomY))
    }
  }

  setListeners() {
    window.addEventListener("keydown", (event) => {
      console.log(event.key);
      const speed = 15;
      switch (event.key) {
        case "ArrowRight":
          this.survivor.moveRight(15);
          break;
        case "ArrowLeft":
          this.survivor.moveLeft(15);
          break;
        case "ArrowUp":
          this.survivor.moveUp(15);
          break;
        case "ArrowDown":
          this.survivor.moveDown(15);
          break;
        case " ":
          this.survivor.shoot();
          break;
      }
    });
  }
}

class Survivor {
  constructor(ctx) {
    this.ctx = ctx;

    this.w = 30;
    this.h = 50;
    this.x = 100;
    this.y = 100;

    this.vx = 0;
    this.vy = 0;

    this.img = new Image();
    this.img.src = "https://img.craftpix.net/2020/03/Free-Villagers-Sprite-Sheets-Pixel-Art4.jpg";
    this.frameWidth = [360, 550, 735, 920, 1110, 1320]
    this.frameCounter = 0
  }

  draw() {
    if(this.frameCounter > this.frameWidth.length - 1) this.frameCounter = 0
    if(this.frameCounter < 0) this.frameCounter = this.frameWidth.length - 1
    
    this.ctx.drawImage(this.img, this.frameWidth[this.frameCounter], 780, 80, 140, this.x, this.y, this.w, this.h);
  }

  shoot() {
    const bullet = new Bullet(ctx, this.x + 10, this.y + 20);
    setInterval(() => {
      bullet.move()
      bullet.draw()
    }, 8)
  }

  move(speed) {
    this.x = speed.vx ? this.x + speed.vx : this.x;
    this.y = speed.vy ? this.y + speed.vy : this.y;

    if (this.x > this.ctx.canvas.width - this.w) {
      this.x = this.ctx.canvas.width - this.w;
    }
    if (this.y > this.ctx.canvas.height - this.h) {
      this.y = this.ctx.canvas.height - this.h;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  }

  moveRight(speed) {
    this.move({ vx: speed });
    this.frameCounter++
  }

  moveLeft(speed) {
    this.move({ vx: -speed });
    this.frameCounter--
  }

  moveUp(speed) {
    this.move({ vy: -speed });
    this.frameCounter++
  }

  moveDown(speed) {
    this.move({ vy: speed });
    this.frameCounter--
  }
}

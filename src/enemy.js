class Enemy {
  constructor(ctx, initialX, initialY) {
    this.ctx = ctx;

    this.x = initialX;
    this.y = initialY;
    this.w = 40;
    this.h = 20;

    this.vx = 0;
    this.vy = 0;

    this.speed = 5

    this.img = new Image();
    this.img.src = "https://img.craftpix.net/2020/04/Free-Desert-Enemy-Sprite-Sheets-Pixel-Art4-720x480.jpg";
    // this.img.src = "https://img.craftpix.net/2020/03/Free-Villagers-Sprite-Sheets-Pixel-Art4.jpg";
    this.frameWidth = [205, 300, 395, 490];
    this.frameCounter = 0;
  }

  draw() {
    if(this.frameCounter > this.frameWidth.length - 1) this.frameCounter = 0
    if(this.frameCounter < 0) this.frameCounter = this.frameWidth.length - 1
    
    this.ctx.drawImage(this.img, this.frameWidth[this.frameCounter], 415, 65, 50, this.x, this.y, this.w, this.h);
  }

  move(speed) {
    if(speed.vx > 0 || this.vy > 0) this.frameCounter++
    if(speed.vx < 0 || this.vy < 0) this.frameCounter--

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

  moveCloser(positionToAchieve) {
    let speed = { vx: 0, vy: 0 }
    if(positionToAchieve.x < this.x) speed.vx = randomNumber(-this.speed, 0)
    else speed.vx = randomNumber(0, this.speed)

    if(positionToAchieve.y < this.y) speed.vy = randomNumber(-this.speed, 0)
    else speed.vy = randomNumber(0, this.speed)

    this.move(speed)
  }

  moveRandom() {
    const speed = { vx: randomNumber(-this.speed, this.speed), vy: randomNumber(-5, 5) }
    this.move(speed)
  }

  moveRight(speed) {
    this.move({ vx: speed });
  }

  moveLeft(speed) {
    this.move({ vx: -speed });
  }

  moveUp(speed) {
    this.move({ vy: -speed });
  }

  moveDown(speed) {
    this.move({ vy: speed });
  }
}

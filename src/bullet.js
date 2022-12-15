class Bullet {
  constructor(ctx, x, y) {
    this.ctx = ctx;

    this.x = x
    this.y = y
    this.w = 18
    this.h = 6

    this.vx = 10
    this.vy = 10

    this.img = new Image()
    this.img.src = "https://img.craftpix.net/2020/04/Dagger-2D-Weapon-Pack2.jpg"
  }

  clear() {
    this.ctx.clearRect(this.x, this.y, this.w, this.h);
  }

  draw() {
    this.ctx.drawImage(this.img, 133, 158, 173, 63, this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx
  }
}

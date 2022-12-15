class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;
    this.x = 0;
    this.y = 0;

    this.vx = 0;
    this.vy = 0;

    this.img = new Image();
    this.img.src =
      "https://img.freepik.com/premium-vector/2d-wooden-texture-background-floor-wood-material-pattern-game-ui_641890-26.jpg?w=2000";
  }

  draw() {
    // console.log(this.x, this.y, this.w, this.h)
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    // this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
  }

  stop() {
    this.move({ vx: 0, vy: 0 })
  }

  move(speed) {
    console.log(speed);
    this.x = speed.vx ? this.x + speed.vx : this.x
    this.y = speed.vy ? this.y + speed.vy : this.y

    // if (this.x <= -this.w || this.x > 0) {
    //   this.x = 0;
    // }
  }

  moveRight(speed) {
    this.move({ vx: -speed })
  }

  moveLeft(speed) {
    this.move({ vx: speed })
  }

  moveUp(speed) {
    this.move({ vy: -speed })
  }

  moveDown(speed) {
    this.move({ vy: speed })
  }
}

/**
 class Background {
  constructor(ctx) {
    this.ctx = ctx

    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0
    this.vx = -1
    this.vy = 0

    this.img = new Image()
    this.img.src = 'https://www.vbforums.com/attachment.php?attachmentid=113103&d=1398112502'
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h)
  }

  move() {
    this.x += this.vx
    this.y += this.vy

    if (this.x <= -this.w) {
      this.x = 0
    }
  }
}


class Game {
  constructor(ctx) {
    this.ctx = ctx

    this.interval = null
    this.bg = new Background(ctx)
    this.mario = new Mario(ctx)
  }

  start() {
    this.initListeners()

    this.interval = setInterval(() => {
      this.clear()
      this.draw()
      this.move()
    }, 1000 / 60)
  }

  initListeners() {
    document.onkeydown = (e) => {
      this.mario.onKeyDown(e.keyCode)
    }
    
    document.onkeyup = (e) => {
      this.mario.onKeyUp(e.keyCode)
    }
  }

  stop() {
    clearInterval(this.interval)
  }

  draw() {
    this.bg.draw()
    this.mario.draw()
  }

  move() {
    this.bg.move()
    this.mario.move()
  }

  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height,
    )
  }
}
class Mario {
  constructor(ctx) {
    this.ctx = ctx

    this.x = 50
    this.y = 0
    this.y0 = 260
    this.w = 40
    this.h = 75
    this.vx = 0
    this.vy = 0
    this.ax = 0
    this.ay = 0.5

    this.img = new Image()
    this.img.src = 'https://s3-eu-west-1.amazonaws.com/cpm-assets/mario-sprite.png'
    this.img.frames = 3
    this.img.frameIndex = 0
    this.tick = 0
  }

  draw() {
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    )

    this.tick++

    if (this.tick > 15) {
      this.tick = 0
      this.img.frameIndex++

      if (this.img.frameIndex > 2) {
        this.img.frameIndex = 0
      }  
    }
    
  }

  move() {
    this.vx += this.ax
    this.vy += this.ay
    this.x += this.vx
    this.y += this.vy

    if (this.y >= this.y0) {
      this.y = this.y0
      this.vy = 0
    }
  }

  jump() {
    if (this.y === this.y0) {
      this.vy = -10  
    }
  }

  onKeyDown(key) {
    if (key === 39) {
      this.vx = 5
    } else if (key === 37) {
      this.vx = -5
    } else if (key === 38) {
      this.jump()
    }
  }

  onKeyUp(key) {
    if (key === 39 || key === 37) {
      this.vx = 0
    }
  }
}


 */
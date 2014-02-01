var Character = function() {

  this.animate = sprites.character.action.base;
  this.direction = 0;
  this.shift = {x: 0, y: 0};

  var tick = 0;

  this.create = function(cell, i, j) {
    if (i == 10 && j == 10) {
      var frame = getFrame(this.animate.length);
      this.render(cell, i, j, this.animate, frame);
    }
  }

  this.render = function(cell, i, j, arr, frame) {
    drawSprite(this, cell, 0, arr[frame]);
    drawSprite(this, cell, 1, arr[frame]);
  }

  this.action = function(arg) {
    switch (arg) {
      case 'base':   this.animate = sprites.character.action.base;   break;
      case 'run':    this.animate = sprites.character.action.run;    break;
    }
  }

  this.route = function(arg) {
    switch (arg) {
      case 'w':  this.direction = 0;   break;
      case 'nw': this.direction = 128; break;
      case 'n':  this.direction = 256; break;
      case 'ne': this.direction = 384; break;
      case 'e':  this.direction = 512; break;
      case 'se': this.direction = 640; break;
      case 's':  this.direction = 768; break;
      case 'sw': this.direction = 896; break;
    }
  }

  function getFrame(length) {
    var frame = ~~tick % length;
    tick = tick + 0.1;
    return frame;
  }

  function drawSprite(char, cell, img, frame) {
    canvas.ctx.drawImage(
      images.img.chars[img],
      frame, 
      char.direction,
      sprites.character.size.w,
      sprites.character.size.h,
      cell.x - (sprites.character.size.w / 2) + tiles.width_half + char.shift.x,
      cell.y - sprites.character.size.h + tiles.height + tiles.height_half + char.shift.y,
      sprites.character.size.w,
      sprites.character.size.h
    )
  }

};
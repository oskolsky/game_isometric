var Map = function() {

  this.size = {
    x: tilesMap[0].length,
    y: tilesMap.length
  };

  var iFrame = 0;

  this.init = function(cell) {
    var
        centeredX = canvas.canvas.width_half - tiles.width_half - (tiles.width_half * this.position.x) + (tiles.width_half * this.position.y),
        centeredY = canvas.canvas.height_half - tiles.height_half - (tiles.height_half * this.position.y) - (tiles.height_half * this.position.x);
    cell.x = cell.x + centeredX - this.shift.x;
    cell.y = cell.y + centeredY - this.shift.y;
  }

  this.create = function(cell, i, j) {
    var drawTile   = tilesMap[i][j];
    canvas.ctx.drawImage(images.img.tiles[drawTile], cell.x, cell.y);

    // // Select cell 
    // if(i == xmouse && j == ymouse) selectCell(pos);

  }

  this.createObj = function(cell, i, j) {
    var drawObject = objectsMap[i][j];
    if (drawObject) {
      canvas.ctx.drawImage(
        images.img.objects[drawObject-1],
        cell.x - images.img.objects[drawObject-1].width / 2 + tiles.width_half,
        cell.y - images.img.objects[drawObject-1].height + tiles.height
      );
    };
  }

  this.createGrid = function(cell) {
    canvas.ctx.strokeStyle = '#fff';
    canvas.ctx.beginPath();
      canvas.ctx.moveTo(cell.x, cell.y + tiles.height_half);
      canvas.ctx.lineTo(cell.x + tiles.width_half, cell.y);
      canvas.ctx.lineTo(cell.x + tiles.width, cell.y + tiles.height_half);
      canvas.ctx.lineTo(cell.x + tiles.width_half, cell.y + tiles.height);
    canvas.ctx.closePath();
    canvas.ctx.stroke();
  }

  this.alignTo = function(object, x, y) {
    this.shift    = {x: 0, y: 0};
    if (object == 'screen') {
      this.position = {
        x: ~~(this.size.x / 2),
        y: ~~(this.size.y / 2)
      };
    } else if (!object) {
      this.position = {x: x, y: y};
    }
  }

  this.screenCenterDraw = function() {
    canvas.ctx.beginPath();
    canvas.ctx.arc(canvas.canvas.width_half, canvas.canvas.height_half, 3, 0, 2 * Math.PI, false);
    canvas.ctx.fillStyle = '#ff0000';
    canvas.ctx.fill();
  }

};
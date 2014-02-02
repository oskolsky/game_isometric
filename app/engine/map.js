var Map = function(options) {
  
  this.options = {
    size: {
      x: level.matrix.tiles[0].length, 
      y: level.matrix.tiles.length
    },
    center: {
      x: 0 || level.map.center.x,
      y: 0 || level.map.center.y
    },    
    showGrid: false || options.showGrid,
    showCoordinates: false || options.showCoordinates
  };
  
  this.render = function(cell, i, j) {
        
    if (this.options.showGrid) {
      canvas.ctx.strokeStyle = '#fff';
      canvas.ctx.beginPath();
        canvas.ctx.moveTo(cell.x, cell.y + config.tiles.size.hh);
        canvas.ctx.lineTo(cell.x + config.tiles.size.wh, cell.y);
        canvas.ctx.lineTo(cell.x + config.tiles.size.w,  cell.y + config.tiles.size.hh);
        canvas.ctx.lineTo(cell.x + config.tiles.size.wh, cell.y + config.tiles.size.h);    
      canvas.ctx.closePath();
      canvas.ctx.stroke();      
      
      // Show center screen
      if (i == this.options.center.x && j == this.options.center.y) {
        canvas.ctx.fillStyle = '#8ED6FF';
        canvas.ctx.fill();
      }
    }
    
    // Show coordinates
    if (this.options.showCoordinates) {
      canvas.ctx.textAlign = 'center';
      canvas.ctx.fillStyle = 'red';
      canvas.ctx.fillText(i + ', ' + j, cell.x + config.tiles.size.hh * 2, cell.y + config.tiles.size.wh / 1.5);      
    }
    
    // Select cell
    if (i == mousePosition.x && j == mousePosition.y) {
      canvas.ctx.drawImage(images.img.resourse[0], cell.x, cell.y);
    }      
    
    return this;
  };
        
};
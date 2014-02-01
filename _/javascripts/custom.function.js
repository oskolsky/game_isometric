// Draw ellipse function
if (!CanvasRenderingContext2D.prototype.drawEllipse) {
  CanvasRenderingContext2D.prototype.drawEllipse = function (x, y, a, b) {
    this.save();
    this.beginPath();
    this.translate(x, y);
    this.scale(a / b, 1);
    this.arc(0, 0, b, 0, Math.PI * 2, true);
    this.restore();
    this.closePath();
  }
}

// Provides requestAnimationFrame in a cross browser way
if (!window.QueueNewFrame) {
  window.QueueNewFrame = function () {
      if (window.requestAnimationFrame)            window.requestAnimationFrame(renderingLoop);
      else if (window.msRequestAnimationFrame)     window.msRequestAnimationFrame(renderingLoop);
      else if (window.webkitRequestAnimationFrame) window.webkitRequestAnimationFrame(renderingLoop);
      else if (window.mozRequestAnimationFrame)    window.mozRequestAnimationFrame(renderingLoop);
      else if (window.oRequestAnimationFrame)      window.oRequestAnimationFrame(renderingLoop);
  };
}
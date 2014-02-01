var Canvas = function() {

  this.createOn = function(containerID) {
    this.canvas = document.createElement('canvas'),
    this.ctx    = this.canvas.getContext('2d');
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.width_half  = this.canvas.width / 2;
    this.canvas.height_half = this.canvas.height / 2;
    document.getElementById(containerID).appendChild(this.canvas);
  }

  this.clear = function() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

};
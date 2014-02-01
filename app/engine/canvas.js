var Canvas = function() {

  this.createOn = function() {
    this.canvas = document.createElement('canvas'),
    this.ctx    = this.canvas.getContext('2d');
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.wh = this.canvas.width  / 2;
    this.canvas.hh = this.canvas.height / 2;
    document.getElementById(config.viewportID).appendChild(this.canvas);
    return this;
  };

  this.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    return this;
  };
  
  this.createOn();

};
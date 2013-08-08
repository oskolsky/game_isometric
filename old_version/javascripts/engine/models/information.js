var Information = function() {

  this.oldTime = +new Date;

  this.mapSize = function(container) {
    document.getElementById(container).textContent = 'Map size: ' + map.size.x + 'x' + map.size.y;
  }

  var i = 1;
  this.fps = function(time, container) {
    i++;
    var fps = Math.round(1000 / (time - this.oldTime));
    if (i == 120) {
      document.getElementById(container).textContent = 'FPS: ' + fps;
      i = 1;
    }
    this.oldTime = time;
  }

}
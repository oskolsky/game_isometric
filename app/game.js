// FPS counter
var lastLoop = new Date;
var looping = 0;


// Game
var canvas = new Canvas();
var map    = new Map(config.map);


// Offset on screen center
var offset = {
  x: canvas.canvas.wh - config.tiles.size.wh - (config.tiles.size.wh * map.options.center.x) + (config.tiles.size.wh * map.options.center.y),
  y: canvas.canvas.hh - config.tiles.size.hh - (config.tiles.size.hh * map.options.center.y) - (config.tiles.size.hh * map.options.center.x)
};


// Mouse position
var mousePosition = {};


// Event listeners mousemove
canvas.canvas.addEventListener('mousemove', function(e) {
  var x = e.pageX - offset.x;
  var y = e.pageY - offset.y;

  ymouse = (2 * (y - level.map.center.y * -1) - x + level.map.center.x * -1) / 2;
  xmouse = x + ymouse - level.map.center.x* -1 - 32;

  mousePosition.x = Math.round(xmouse / 32);
  mousePosition.y = Math.round(ymouse / 32);
  $('.console').find('.console_tile > span').text(mousePosition.x + ' x ' + mousePosition.y);
}, false);


// Game loop
var renderingLoop = function(time) {  
  canvas.clear();

  for (var i = 0; i < level.matrix.tiles.length; i++) {
    for (var j = 0; j < level.matrix.tiles[i].length; j++) {
      var cell = {
        x: (i - j) * config.tiles.size.h  + offset.x,
        y: (i + j) * config.tiles.size.hh + offset.y
      };
      map.render(cell, i, j);                        
    }
  }      
  
  fpsCount(time);
  window.QueueNewFrame();
};
renderingLoop();







// UI
$('.console').find('.console_map > span').text(level.matrix.tiles.length + ' x ' + level.matrix.tiles.length);
$('.console').find('.console_level > span').text(level.caption);


// FPS counter (helper UI function)
function fpsCount(time) {
  var fps = Math.round(1000 / (time - lastLoop));
  looping++;
  if (looping == 120) {
    $('.console').find('.console_fps > span').text(fps);
    looping = 0;
  }
  lastLoop = time;
};
var 
  canvas      = new Canvas(),
  map         = new Map(),
  tiles       = new Tiles(),
  character   = new Character();
  information = new Information();

information.mapSize('size');

canvas.createOn('viewport');

controls = new Controls();

map.alignTo('screen');

var renderingLoop = function(time) {

  canvas.clear();

  for (var i = 0; i < tilesMap.length; i++) {
    for (var j = 0; j < tilesMap[i].length; j++) {

      var cell = {};
      cell.x = (i - j) * tiles.height;
      cell.y = (i + j) * tiles.height_half;
      
      map.init(cell); 
      // map.screenCenterDraw();
      // map.createGrid(cell, i, j);
      map.create(cell, i, j);
      character.create(cell, i, j, time);
      // map.createObj(cell, i, j);

    }
  } 

  information.fps(time, 'fps');

  window.QueueNewFrame();
  
};

renderingLoop();
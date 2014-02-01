var Controls = function() {

  var keyMap = {
    87: false,      // up
    83: false,      // down
    65: false,      // left
    68: false       // right
  };

  var speed = 10;

	// var mapMove = {};

	// mapMove.move = false;

	// var 
	// 	buttons = {
	// 		btn_1: document.getElementById('btn-1'),
	// 		btn_2: document.getElementById('btn-2'),
	// 		btn_3: document.getElementById('btn-3'),
	// 		btn_4: document.getElementById('btn-4'),
	// 		btn_5: document.getElementById('btn-5')
	// 	}

	/* Buttons action
	--------------------------------------------------------------------*/
	// buttons.btn_1.addEventListener('mousedown', function(arg) {
	// 	character.action('base');
	// });

	// buttons.btn_2.addEventListener('mousedown', function(arg) {
	// 	character.action('run');
	// });

	// buttons.btn_3.addEventListener('mousedown', function(arg) {
	// 	character.action('attack');
	// });

	// buttons.btn_4.addEventListener('mousedown', function(arg) {
	// 	character.action('lose');
	// });

	// buttons.btn_5.addEventListener('mousedown', function(arg) {
	// 	character.action('win');
	// });

	/* Canvas action on key
	--------------------------------------------------------------------*/
	document.addEventListener('keydown', function(arg) {

    if (arg.keyCode in keyMap) {

      keyMap[arg.keyCode] = true;

      if (keyMap[87] || keyMap[83] || keyMap[65] || keyMap[68]) character.action('run');

      if (keyMap[87]) {
        character.route('n');
        character.shift.y = character.shift.y - speed;
      }

      if (keyMap[83]) {
        character.route('s');
        character.shift.y = character.shift.y + speed;
      }

      if (keyMap[65]) {
        character.route('w');
        character.shift.x = character.shift.x - speed;
      }

      if (keyMap[68]) {
        character.route('e');
        character.shift.x = character.shift.x + speed;
      }

      if (keyMap[87] && keyMap[65]) character.route('nw');
      if (keyMap[87] && keyMap[68]) character.route('ne');
      if (keyMap[83] && keyMap[65]) character.route('sw');
      if (keyMap[83] && keyMap[68]) character.route('se');

    }    

    // console.log(character.shift.x);

	}, false);

  document.addEventListener('keyup', function(arg) {

    if (arg.keyCode in keyMap) {
        keyMap[arg.keyCode] = false;
        if (!keyMap[87] && !keyMap[83] && !keyMap[65] && !keyMap[68]) character.action('base');
    }    


  }, false);

  /* Canvas action on mause
  --------------------------------------------------------------------*/
	canvas.canvas.addEventListener('mousedown', function(arg) {
		// Moving map
		// mapMove.move = true;
		// mapMove.startShiftX = map.shift.x;
		// mapMove.startShiftY = map.shift.y;
		// mapMove.mousePos  = {
		// 	x: arg.clientX,
		// 	y: arg.clientY
		// };

		// Char attack
		character.action('attack');
	});

	canvas.canvas.addEventListener('mouseup', function(arg) {
		// mapMove.move = false;
	});

	canvas.canvas.addEventListener('dblclick', function(arg) {
	});

	canvas.canvas.addEventListener('mousemove', function(arg) {
		// if (mapMove.move) {
		// 	map.shift = {
		// 		x: mapMove.startShiftX + mapMove.mousePos.x - arg.clientX,
		// 		y: mapMove.startShiftY + mapMove.mousePos.y - arg.clientY
		// 	};
		// }
	});

};
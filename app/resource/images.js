var images = {

  src: {

    // tiles: [
    //   '/images/tiles/tile.png',
    // ],

    // objects: [
    //   '/images/tiles/object.png',
    // ],

    // chars: [
    //   '/images/chars/clothes.png',
    //   '/images/chars/male_head1.png',
    //   '/images/chars/buckler.png',
    //   '/images/chars/shortsword.png'
    // ],

    resourse: [
      '/resource/select-cell.png'
    ]

  },

  img: {
    tiles:    [],
    objects:  [],
    chars:    [],
    resourse: []
  }

}

// // Load tiles
// for(var i = 0; i < images.src.tiles.length; i++) {
//   images.img.tiles[i] = new Image();
//   images.img.tiles[i].src = images.src.tiles[i];
// }

// // Load objects
// for(var i = 0; i < images.src.objects.length; i++) {
//   images.img.objects[i] = new Image();
//   images.img.objects[i].src = images.src.objects[i];
// }

// // Load chars
// for(var i = 0; i < images.src.chars.length; i++) {
//   images.img.chars[i] = new Image();
//   images.img.chars[i].src = images.src.chars[i];
// }

// Load resourse
for(var i = 0; i < images.src.resourse.length; i++) {
  images.img.resourse[i] = new Image();
  images.img.resourse[i].src = images.src.resourse[i];
}
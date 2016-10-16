'use strict';

Crafty.scene('safe-area', function () {
    Crafty.background('grey');

    platformConstructor(width/4, height/2, width/12, 25, 'brown');
    platformConstructor(width/3, height/2, width/6, 25, 'brown');
    platformConstructor(width/2, height/2, width/6, 25, 'brown');
    platformConstructor(width*2/3, height/2, width/12, 25, 'brown');

    platformConstructor(0, height, width, 25, '#000000');
    wallConstructor(-100, 0, 100, height, '#000000');
    wallConstructor(width + 1, 0, 100, height, '#000000');

    let blackPlayer = playerConstructor(125, height - 25); //, 'blue');
});


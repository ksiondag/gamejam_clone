'use strict';

Crafty.scene('black-and-white', function () {
    var height = Crafty.viewport.height,
        width = Crafty.viewport.width;

    var blackPlayer;
    var whitePlayer;

    Crafty.background('white');
    Crafty.e('Color,2D,DOM')
        .color('black')
        .attr({x: width/6, y:0, w: width/6, h: height})
    ;

    Crafty.e('Color,2D,DOM')
        .color('black')
        .attr({x: width/2, y:0, w: width/6, h: height})
    ;

    Crafty.e('Color,2D,DOM')
        .color('black')
        .attr({x: width*5/6, y:0, w: width/6, h: height})
    ;

    platformConstructor(width/4, height/2, width/12, 25, '#FFFFFF');
    platformConstructor(width/3, height/2, width/6, 25, '#000000');
    platformConstructor(width/2, height/2, width/6, 25, '#FFFFFF');
    platformConstructor(width*2/3, height/2, width/12, 25, '#000000');

    platformConstructor(0, height, width, 25, '#000000');
    wallConstructor(-100, 0, 100, height, '#000000');
    wallConstructor(width + 1, 0, 100, height, '#000000');

    blackPlayer = playerConstructor(125, height - 25, 'black');
    whitePlayer = playerConstructor(width - 125, height - 25, 'white');

    Crafty.audio.play('melody', -1);
});


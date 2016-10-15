'use strict';

(() => {

Crafty.c('BackgroundLighting', {
    init: function () {
        this.requires('Color,2D,DOM,Motion');
        this.attr({'vx': -50, 'vy': 0});

        this.bind('Moved', function (e) {
            if (this.x + this.w < 0) {
                this.x = 7*Crafty.viewport.width/6;
            }
        });
    }
});

})();

Crafty.scene('black-and-white', function () {
    const height = Crafty.viewport.height,
          width = Crafty.viewport.width;

    Crafty.background('white');
    Crafty.e('BackgroundLighting')
        .color('black')
        .attr({x: width/6, y:0, w: width/6, h: height})
    ;

    Crafty.e('BackgroundLighting')
        .color('black')
        .attr({x: width/2, y:0, w: width/6, h: height})
    ;

    Crafty.e('BackgroundLighting')
        .color('black')
        .attr({x: width*5/6, y:0, w: width/6, h: height})
    ;

    Crafty.e('BackgroundLighting')
        .color('black')
        .attr({x: 7*width/6, y:0, w: width/6, h: height})
    ;

    platformConstructor(width/4, height/2, width/12, 25, '#FFFFFF');
    platformConstructor(width/3, height/2, width/6, 25, '#000000');
    platformConstructor(width/2, height/2, width/6, 25, '#FFFFFF');
    platformConstructor(width*2/3, height/2, width/12, 25, '#000000');

    platformConstructor(0, height, width, 25, '#000000');
    wallConstructor(-100, 0, 100, height, '#000000');
    wallConstructor(width + 1, 0, 100, height, '#000000');

    let blackPlayer = playerConstructor(125, height - 25, 'black');
    let whiteEnemy = enemyConstructor(width - 125, height - 25, 'white');

    Crafty.audio.play('melody', -1);
});


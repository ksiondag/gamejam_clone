'use strict';

(() => {
Crafty.c('RestartButton', {
    init: function () {
        this.requires('2D,MouseTracker');

        this.attach(
            Crafty.e('2D,Canvas,Color,Mouse,Collision')
                .attr({x: 0, y: 0, w: 150, h: 150})
                .color('#000000')
                .bind('MouseOver', function () {
                    this.color('#FFFF00');
                })
                .bind('MouseOut', function () {
                    this.color('#000000');
                })
                .bind('MouseDown', (e) => {
                    Crafty.scene('safe-area');
                })
        );

        this.attach(
            Crafty.e('2D,Canvas,Color')
                .attr({x: 20, y: 25, w: 110, h: 150})
                .color('#FFFFFF')
        );

        this.attach(
            Crafty.e('2D,Canvas,Text')
                .attr({x: 20, y: 25, w: 110, h: 60})
                .text('You Won!')
                .textFont({size: '50px'})
            );
    }
});

})();

Crafty.scene('end-game', function () {
    const height = Crafty.viewport.height,
          width  = Crafty.viewport.width;

    Crafty.background('white');

    Crafty.e('RestartButton')
        .attr({x: 680, y: Crafty.viewport.height - Crafty.viewport.height/2 - 25})
    ;
    Crafty.audio.stop('melody');
    Crafty.audio.play('end1', 1);
});

'use strict';

(() => {

Crafty.c('Enemy', {
    init: function () {
        this.requires('Entity');
    }
});

})();

const enemyConstructor = (x, y, color) => {

    const enemy = Crafty.e('Enemy')
        .attr({x: x, y: y, w: 50, h: 100})
        .color(color)
    ;

    let mouseX = 0, mouseY = 0;
    Crafty.addEvent(enemy, Crafty.stage.elem, 'mousemove', function (e) {
        mouseX = e.x;
        mouseY = e.y;
    });

    let countdown = 5*60;
    enemy.bind('EnterFrame', function () {
        countdown -= 1;
        if (countdown > 0) {
            return;
        }
        countdown = 5*60;

        let player = Crafty('Player');

        enemy.jump(
            player.x,
            player.y
        );
    });
};


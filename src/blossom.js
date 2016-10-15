'use strict';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var enemyConstructor = () => {
    return Crafty.e('Enemy,2D,DOM,Color,Collision,Motion')
        .color('black')
        .attr({
            x: getRandomInt(0, Crafty.viewport.width - 50),
            y: 0,
            w: 40,
            h: 40,
            vy: 100,
            health: 10,
            colliding: false
        })
        .checkHits('Platform,Enemy,Player')
        .bind('HitOn', function () {
            this.attr({vy: 0});
            this.removeComponent('Motion,Collision');
            this.attr("colliding", true);
        })
        .bind('HitOff', function () {
            this.attr("colliding", false);
        })
        .bind('Attack', function () {
            if (this.attr("colliding")) {
                var health = this.attr("health");
                if (health > 0) {
                    health -= 1;
                    this.attr("health", health);
                    // TODO(tmf): flash red with pain and sadness
                }
                else {
                    this.destroy();
                }
            }
        })
        ;
};

Crafty.scene('level', function (p) {
    var height = Crafty.viewport.height,
        width = Crafty.viewport.width;

    var player;

    Crafty.background('#FFFFFF');
    platformConstructor(0, height - 25, width, 25, '#000000');
    wallConstructor(-100, 0, 100, height, '#000000');
    wallConstructor(width + 1, 0, 100, height, '#000000');

    player = playerConstructor(p.x, p.y, p.color());
    enemyConstructor();
});


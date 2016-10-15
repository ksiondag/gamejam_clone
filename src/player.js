'use strict';

(() => {

const jumpEvent = function (e) {
    this.jump(e.x, e.y);
};

Crafty.c('Player', {
    init: function () {
        this.requires('DOM, Color, Gravity, Collision');
        this.bind('LandedOnGround', () => {
            this.attr({vx: 0});
        });

        Crafty.addEvent(this, Crafty.stage.elem, 'mousedown', jumpEvent);

        this.gravity('Platform');
        this.gravityConst(2000);
    },
    jump: function (x, y) {
        var attr, midY, bottomY, midX, dx, dy;

        // Alternative: apex is at middle of player rectangle
        // Consideration for further iterations
        midY = this.y + this.h/2;
        bottomY = this.y + this.h;
        midX = this.x + this.w/2;

        dx = x - midX;
        dy = y - bottomY;

        attr = calculateVelocity.apply(this, [dx, dy]);
        this.attr(attr);
        return this;
    }
});

})();

var playerConstructor = (x, y, color) => {
    var player;

    player = Crafty.e('Player')
        .attr({x: x, y: y, w: 50, h: 100})
        .color(color)
    ;

    return player;
};


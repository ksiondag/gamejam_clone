'use strict';

(() => {

Crafty.c('Entity', {
    init: function () {
        this.requires('DOM, Color, Gravity, Collision');
        this.bind('LandedOnGround', () => {
            this.attr({vx: 0});
        });

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


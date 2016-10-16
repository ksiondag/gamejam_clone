'use strict';

(() => {

Crafty.c('Player', {
    init: function () {
        this.requires('Entity');
        let sword = swordConstructor(this);
        Crafty.addEvent(this, Crafty.stage.elem, 'mousedown', function (e) {
            if (e.button == Crafty.mouseButtons.LEFT) {
                this.jump(e.clientX, e.clientY);
            }
            if (e.button == Crafty.mouseButtons.RIGHT) {
                console.log("SHWING");
                sword.attack(e.clientX, e.clientY);
                // Crafty.trigger("Attack");
            }
        });
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


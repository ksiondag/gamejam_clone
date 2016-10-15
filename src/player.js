'use strict';

(() => {
const playerEvent = function (e) {
    if (e.button == Crafty.mouseButtons.LEFT) {
        this.jump(e.x, e.y);
    }
    if (e.button == Crafty.mouseButtons.RIGHT) {
        console.log("SHWING");
        Crafty.trigger("Attack");
    }
};

Crafty.c('Player', {
    init: function () {
        this.requires('Entity');
        Crafty.addEvent(this, Crafty.stage.elem, 'mousedown', playerEvent);
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


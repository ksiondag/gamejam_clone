'use strict';

(() => {

const jumpEvent = function (e) {
    this.jump(e.x, e.y);
};

Crafty.c('Player', {
    init: function () {
        this.requires('Entity');
        Crafty.addEvent(this, Crafty.stage.elem, 'mousedown', jumpEvent);
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


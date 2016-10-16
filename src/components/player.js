'use strict';

(() => {

Crafty.c('Player', {
    init: function () {
        this.requires('Entity,Kunoichi');
        Crafty.addEvent(this, Crafty.stage.elem, 'mousedown', function (e) {
            if (e.button == Crafty.mouseButtons.LEFT) {
                this.jump(e.clientX, e.clientY);
            }
            if (e.button == Crafty.mouseButtons.RIGHT) {
                console.log("SHWING");
                this.attack(e.clientX, e.clientY);
            }
        });

        let healcount = 0;

        this.bind('EnterFrame', function () {
            if (healcount > 0) {
                if(--healcount == 0) {
                    this.color(this.attr("base_color"));
                }
            }
        });

        this.bind('TakeHit', function (e) {
            // TODO(tmf): add player health
            this.color('red');
            healcount = 5;
        });
    }
});

})();

var playerConstructor = (x, y, color) => {
    var player;

    player = Crafty.e('Player')
        .attr({x: x,
               y: y,
               w: 50,
               h: 100,
               base_color: color})
        .color(color)
    ;

    return player;
};


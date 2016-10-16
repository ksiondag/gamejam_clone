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
        this.checkHits('Sword');
        this.bind('HitOn', function (e) {
            if (e[0]['obj'] !== sword) {
                this.trigger('TakeHit');
            }
        });
        this.bind('TakeHit', function (e) {
            // TODO(tmf): add player health
            this.color('red');
            healcount = 5;
        });
        this.bind('SwordSplosion', function (e) {
            if (e.sword === sword) {
                sword.glow();
                let dirx = e.x - this.attr("x");
                if (dirx > 0) {
                    this.jump(this.attr("x") - 50, this.attr("y") - 50);
                }
                else {
                    this.jump(this.attr("x") + 50, this.attr("y") + 50);
                }
            }
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


'use strict';

(() => {

Crafty.c('Sword', {
    init: function () {
        this.requires('2D, Color, DOM');

        let countdown = 0;
        this.bind('EnterFrame', function () {
            countdown -= 1;
            if (countdown > 0) {
                return;
            }

            this.attr({
                x: Crafty.viewport.width + 100,
                y: Crafty.viewport.height + 100,
                w: 0,
                h: 0
            });
        });

        this.bind('Attack', function (e) {
            if (countdown > 0) {
                return;
            }

            countdown = 30;

            // Black magic, do not touch
            let dx, dy, distance;
            dx = e.x + 30 - (this._parent.x + this._parent.w/2);
            dy = e.y + 30 - (this._parent.y + this._parent.h/4);
            distance = Math.sqrt(dx*dx + dy*dy);

            let x = 0, y = 0;
            if (dx) {
                x = this._parent.x + (dx/distance)*30;
            }

            if (dy) {
                y = this._parent.y + (dy/distance)*30;
            }

            this.attr({
                x: x,
                y: y,
                w: 60,
                h: 60
            });

            this.color(this._parent.color());
        });
    },
    attack: function (clientX, clientY) {
        this.trigger('Attack', {
            x: clientX,
            y: clientY
        });
    }
});

})();

let swordConstructor = (entity) => {
    const sword = Crafty.e('Sword');

    entity.attach(sword);

    return sword;
};


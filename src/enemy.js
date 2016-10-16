'use strict';

(() => {

Crafty.c('Enemy', {
    init: function () {
        this.requires('Entity');
        let sword = swordConstructor(this);

        let countdown = 5*60;
        let healcount = 0;

        this.bind('EnterFrame', function () {
            if (healcount > 0) {
              if(--healcount == 0) {
                  this.color(this.attr("base_color"));
              }
            }
            countdown -= 1;
            if (countdown > 0) {
                return;
            }
            countdown = 5*60;

            let player = Crafty('Player');
            this.trigger('Attack', {
                x: player.x,
                y: player.y});

/*          this.jump(
                player.x,
                player.y
            );
*/
        });

        this.bind('Attack', function (e) {
            sword.attack(e.x, e.y);
        });
        this.checkHits('Sword');
        this.bind('HitOn', function(e) {
            if (e[0]['obj'] !== sword) {
                console.log("someone else cut me!");
                this.trigger('TakeHit');
            }
        });
        this.bind('TakeHit', function () {
            var health = this.attr('health');
            if (health > 0) {
              this.attr('health', --health);
              this.color('red');
              healcount = 5;
            }
            else {
              this.destroy();
            }
        });
        this.bind("SwordSplosion", function (e) {
            if(e.sword === sword) {
                sword.glow();
                console.log("Enemy blinded by magic!");
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

const enemyConstructor = (x, y, color) => {
    // TODO(tmf): make health a thing we can pass on construction
    const enemy = Crafty.e('Enemy')
        .attr({x: x,
               y: y,
               w: 50,
               h: 100,
               health: 10,
               base_color: color
               })
        .color(color)
    ;

    let mouseX = 0, mouseY = 0;
    Crafty.addEvent(enemy, Crafty.stage.elem, 'mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
};


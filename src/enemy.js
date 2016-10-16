'use strict';

(() => {

Crafty.c('Enemy', {
    init: function () {
        this.requires('Entity');
        let sword = swordConstructor(this);
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

    let sword = swordConstructor(enemy)
    let countdown = 5*60;
    let healcount = 0;

    enemy.bind('EnterFrame', function () {
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

/*        this.jump(
            player.x,
            player.y
        );
*/
        sword.attack(player.x, player.y)
    });
    enemy.checkHits('Sword');
    enemy.bind('HitOn', function (e) {
        console.log(e)
        this.trigger('TakeHit');
    })
    enemy.bind('TakeHit', function () {
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
};


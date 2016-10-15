'use strict';

(() => {

Crafty.c('Enemy', {
    init: function () {
        this.requires('Entity');
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
               colliding: false,
               health: 10,
               base_color: color
               })
        .color(color)
    ;

    let mouseX = 0, mouseY = 0;
    Crafty.addEvent(enemy, Crafty.stage.elem, 'mousemove', function (e) {
        mouseX = e.x;
        mouseY = e.y;
    });

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

        this.jump(
            player.x,
            player.y
        );
    });
    enemy.checkHits('Player');
    enemy.bind('HitOn', function () {
        this.attr('colliding', true);
    })
    enemy.bind('HitOff', function () {
        this.attr('colliding', false);
    });
    enemy.bind('Attack', function () {
        if(this.attr('colliding')) {
          var health = this.attr('health');
          if (health > 0) {
              // TODO(tmf): add hit animation
              this.trigger("TakeHit");
          }
          else {
              this.destroy();
          }
        }
    });
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


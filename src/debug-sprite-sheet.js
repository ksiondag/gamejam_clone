'use strict';

(() => {
})();

Crafty.scene('debug-scene', function () {
    let y = 60;
    let x = 60;

    let construction = (x, y, attackX, attackY) => {
        playerConstructor(x, y, 'blue')
            .gravityConst(0)
            ._children[1]
                .attack(x + 25 + attackX, y + 25 + attackY)
        ;
    };

    // NO ATTACK
    playerConstructor(x, y, 'blue')
        .gravityConst(0)
    ;
    x += 160;

    // UP
    construction(x, y, 0, -10000);
    x += 160;

    // UP RIGHT
    construction(x, y, 10000, -10000);
    x += 160;

    // RIGHT
    construction(x, y, 10000, 0);
    x += 160;

    // DOWN RIGHT
    construction(x, y, 10000, 10000);
    x += 160;

    // DOWN
    construction(x, y, 0, 10000);
    x += 160;

    y += 160;
    x = 60;

    // NO ATTACK
    playerConstructor(x, y, 'blue')
        .gravityConst(0)
    ;
    x += 160;

    // UP
    construction(x, y, 0, -10000);
    x += 160;

    // UP LEFT
    construction(x, y, -10000, -10000);
    x += 160;

    // LEFT
    construction(x, y, -10000, 0);
    x += 160;

    // DOWN LEFT
    construction(x, y, -10000, 10000);
    x += 160;

    // DOWN
    construction(x, y, 0, 10000);
    x += 160;

});


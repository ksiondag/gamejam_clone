'use strict';

Crafty.scene('generate-sprite-sheet', function () {
    let y = 35;
    let x = 25;

    let construction = (x, y, attackX, attackY) => {
        playerConstructor(x, y, 'blue')
            .color('blue')
            .gravityConst(0)
            .attack(x + 25 + attackX, y + 25 + attackY, 1000*60*60, 'red')
        ;
    };

    // No attack stand idle
    playerConstructor(x, y, 'blue')
        .color('blue')
        .gravityConst(0)
    ;
    x += 120;

    playerConstructor(x, y, 'blue')
        .color('blue')
        .gravityConst(0)
    ;
    x += 120;

    playerConstructor(x, y, 'blue')
        .color('blue')
        .gravityConst(0)
    ;
    x += 120;

    // No attack running
    playerConstructor(x, y, 'blue')
        .color('blue')
        .gravityConst(0)
    ;
    x += 120;

    playerConstructor(x, y, 'blue')
        .color('blue')
        .gravityConst(0)
    ;
    x += 120;

    playerConstructor(x, y, 'blue')
        .color('blue')
        .gravityConst(0)
    ;
    x += 120;

    // No attack jumping
    playerConstructor(x, y, 'blue')
        .color('blue')
        .gravityConst(0)
    ;
    x += 120;

    playerConstructor(x, y, 'blue')
        .color('blue')
        .gravityConst(0)
    ;
    x += 120;

    playerConstructor(x, y, 'blue')
        .color('blue')
        .gravityConst(0)
    ;
    x += 120;

    y += 170;
    x = 25;

    // Attack up grounded
    construction(x, y, 0, -10000);
    x += 120;

    construction(x, y, 0, -10000);
    x += 120;

    construction(x, y, 0, -10000);
    x += 120;

    // Attack up in air
    construction(x, y, 0, -10000);
    x += 120;

    construction(x, y, 0, -10000);
    x += 120;

    construction(x, y, 0, -10000);
    x += 120;

    y += 170;
    x = 25;

    // Attack up-side grounded
    construction(x, y, 10000, -10000);
    x += 120;

    construction(x, y, 10000, -10000);
    x += 120;

    construction(x, y, 10000, -10000);
    x += 120;

    // Attack up-side in air
    construction(x, y, 10000, -10000);
    x += 120;

    construction(x, y, 10000, -10000);
    x += 120;

    construction(x, y, 10000, -10000);
    x += 120;

    y += 170;
    x = 25;

    // Attack side grounded
    construction(x, y, 10000, 0);
    x += 120;

    construction(x, y, 10000, 0);
    x += 120;

    construction(x, y, 10000, 0);
    x += 120;

    // Attack side in air
    construction(x, y, 10000, 0);
    x += 120;

    construction(x, y, 10000, 0);
    x += 120;

    construction(x, y, 10000, 0);
    x += 120;

    y += 170;
    x = 25;

    // Attack down side grounded
    construction(x, y, 10000, 10000);
    x += 120;

    construction(x, y, 10000, 10000);
    x += 120;

    construction(x, y, 10000, 10000);
    x += 120;

    // Attack down side in air
    construction(x, y, 10000, 10000);
    x += 120;

    construction(x, y, 10000, 10000);
    x += 120;

    construction(x, y, 10000, 10000);
    x += 120;

    y += 170;
    x = 25;

    // Attack down grounded
    construction(x, y, 0, 10000);
    x += 120;

    construction(x, y, 0, 10000);
    x += 120;

    construction(x, y, 0, 10000);
    x += 120;

    // Attack down in air
    construction(x, y, 0, 10000);
    x += 120;

    construction(x, y, 0, 10000);
    x += 120;

    construction(x, y, 0, 10000);
    x += 120;

    y += 170;
    x = 25;
});

Crafty.scene('generate-sprite-sheet');


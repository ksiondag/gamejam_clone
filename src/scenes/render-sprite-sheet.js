'use strict';

Crafty.scene('render-sprite-sheet', function () {
    let rows = [
        [
            'standing',
            'running',
            'jumping'
        ],
        [
            'upAttackGrounded',
            'upAttackAir'
        ],
        [
            'upSideAttackGrounded',
            'upSideAttackAir'
        ],
        [
            'sideAttackGrounded',
            'sideAttackAir'
        ],
        [
            'downSideAttackGrounded',
            'downSideAttackAir'
        ],
        [
            'downAttackGrounded',
            'downAttackAir'
        ]
    ];

    let x = 0;
    let y = 0;

    rows.forEach((row) => {
        row.forEach((type) => {
            Crafty.e('2D', 'DOM', type + 1, 'Color')
                .attr({
                    x: x,
                    y: y,
                    w: 110,
                    h: 160
                })
                //.color('black')
            ;
            x += 111;

            Crafty.e('2D', 'DOM', type + 2, 'Color')
                .attr({
                    x: x,
                    y: y,
                    w: 110,
                    h: 160
                })
                //.color('black')
            ;
            x += 111;

            Crafty.e('2D', 'DOM', type + 3, 'Color')
                .attr({
                    x: x,
                    y: y,
                    w: 110,
                    h: 160
                })
                //.color('black')
            ;
            x += 111;
        });
        x = 0;
        y += 161;
    });
});

Crafty.scene('loading', {
    scene: 'render-sprite-sheet'
});


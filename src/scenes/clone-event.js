'use strict';

Crafty.scene('clone-event', function (obj) {
    const height = Crafty.viewport.height,
          width = Crafty.viewport.width;

    Crafty.background('white');
    Crafty.e('Color,2D,DOM')
        .color('black')
        .attr({x: width/6, y:0, w: width/6, h: height})
    ;

    Crafty.e('Color,2D,DOM')
        .color('black')
        .attr({x: width/2, y:0, w: width/6, h: height})
    ;

    Crafty.e('Color,2D,DOM')
        .color('black')
        .attr({x: width*5/6, y:0, w: width/6, h: height})
    ;

    Crafty.e('Color,2D,DOM')
        .color('black')
        .attr({x: 7*width/6, y:0, w: width/6, h: height})
    ;

    platformConstructor(width/4, height/2, width/12, 25, '#FFFFFF')
        .removeComponent('Platform')
    ;
    platformConstructor(width/3, height/2, width/6, 25, '#000000')
        .removeComponent('Platform')
    ;
    platformConstructor(width/2, height/2, width/6, 25, '#FFFFFF')
        .removeComponent('Platform')
    ;
    platformConstructor(width*2/3, height/2, width/12, 25, '#000000')
        .removeComponent('Platform')
    ;

    platformConstructor(0, height, width, 25, '#000000');
    wallConstructor(-100, 0, 100, height, '#000000');
    wallConstructor(width + 1, 0, 100, height, '#000000');

    let blackPlayer = playerConstructor(width/2 - obj.w, obj.y);
    blackPlayer.gravityConst(0);

    let whitePlayer = playerConstructor(width/2, obj.y);
    whitePlayer.gravityConst(0);
    whitePlayer.getSprite().destroy()
    whitePlayer.attachSprite('WhiteSprite');

    const transitionBlackAndWhite = function () {
        blackPlayer.attr({vx: -1000});
        whitePlayer.attr({vx: 1000});

        Crafty.e('Delay').delay(function () {
            Crafty.scene('black-and-white', {
                black: {
                    x: blackPlayer.x,
                    y: blackPlayer.y
                },
                white: {
                    x: whitePlayer.x,
                    y: whitePlayer.y
                }
            });
        }, 1000);

        Crafty.unbind('MouseDown', temporaryBothButtonsAttack);
        Crafty.unbind('SwordSplosion', transitionBlackAndWhite);
    };
    Crafty.bind('SwordSplosion', transitionBlackAndWhite);

    const temporaryBothButtonsAttack = function () {
        Crafty.unbind('MouseDown', temporaryBothButtonsAttack);

        let swordAudio = 'sword' + (Math.floor(Math.random()*2) + 1);
        Crafty.audio.stop('swoosh1');
        Crafty.audio.stop('swoosh2');
        Crafty.audio.play(swordAudio, 1);
        Crafty.trigger(
            "SwordSplosion",
            {
               sword: this,
               x: this.attr('x'),
               y: this.attr('y')
            }
        );
    };
    Crafty.bind('MouseDown', temporaryBothButtonsAttack);

    Crafty.audio.play('start', 1);
});


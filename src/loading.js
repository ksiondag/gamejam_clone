'use strict';

Crafty.scene('loading', function () {
    Crafty.e('2D,DOM,Mouse,Text')
    .attr({
        x:0,
        y:0,
        w:100,
        h:50
    })
    .text("Loading");

    Crafty.paths({
        "audio": "assets/"
    });

    let assetsObj = {
        "audio": {
            "melody": ["japanese_drums_with_fat_keytar.wav", "japanese_drums_with_fat_keytar.mp3"]
        }
    };

    Crafty.load(assetsObj, function () {
        Crafty.scene('black-and-white');
    });

});


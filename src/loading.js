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
        "audio": "assets/audio/"
    });

    let assetsObj = {
        "audio": {
            "melody": ["japanese_drums.wav"],
            "end1": ["end1.wav"],
            "end2": ["end2.wav"],
            "end3": ["end3.wav"],
            "knock1": ["knock1.wav"],
            "knock2": ["knock2.wav"],
            "start": ["start.wav"],
            "swoosh1": ["swoosh1.wav"],
            "swoosh2": ["swoosh2.wav"],
            "sword1": ["sword1.wav"],
            "sword2": ["sword2.wav"]
        }
    };

    Crafty.load(assetsObj, function () {
        Crafty.scene('black-and-white');
    });

});


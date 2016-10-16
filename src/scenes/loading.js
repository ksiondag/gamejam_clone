'use strict';

Crafty.scene('loading', function (data) {
    Crafty.e('2D,DOM,Mouse,Text')
    .attr({
        x:0,
        y:0,
        w:100,
        h:50
    })
    .text("Loading");

    Crafty.paths({
        "audio": "assets/audio/",
        "images": "assets/sprites/"
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
        },
        "sprites": {
            "sprite-sheet.png": {
                "tile": 120,
                "tileh": 170,
                "map": {
                    "DebugSprite": [0,0]
                },
                "paddingX": 0,
                "paddingY": 0,
                "paddingAroundBorder": false
            },
            "black-sprite-sheet.png": {
                "tile": 120,
                "tileh": 170,
                "map": {
                    "BlackSprite": [0,0]
                },
                "paddingX": 0,
                "paddingY": 0,
                "paddingAroundBorder": false
            },
            "white-sprite-sheet.png": {
                "tile": 120,
                "tileh": 170,
                "map": {
                    "WhiteSprite": [0,0]
                },
                "paddingX": 0,
                "paddingY": 0,
                "paddingAroundBorder": false
            }
        }
    };

    Crafty.load(assetsObj, function () {
        if (data && data.scene) {
            Crafty.scene(data.scene);
        } else {
            Crafty.scene('black-and-white');
        }
    });

});


'use strict';

Crafty.scene('loading', function (data) {
    Crafty.e('2D,Canvas,Mouse,Text')
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
            "melody": ["japanese_drums.wav", "japanese_drums.mp3", "japanese_drums.ogg"],
            "end1": ["end1.wav", "end1.mp3", "end1.ogg"],
            "end2": ["end2.wav", "end2.mp3", "end2.ogg"],
            "end3": ["end3.wav", "end3.mp3", "end3.ogg"],
            "knock1": ["knock1.wav", "knock1.mp3", "knock1.ogg"],
            "knock2": ["knock2.wav", "knock2.mp3", "knock2.ogg"],
            "start": ["start.wav", "start.mp3", "start.ogg"],
            "swoosh1": ["swoosh1.wav", "swoosh1.mp3", "swoosh1.ogg"],
            "swoosh2": ["swoosh2.wav", "swoosh2.mp3", "swoosh2.ogg"],
            "sword1": ["sword1.wav", "sword1.mp3", "sword1.ogg"],
            "sword2": ["sword2.wav", "sword2.mp3", "sword2.ogg"],
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
            },
            "ying-yang-sprite-sheet2.png": {
                "tile": 120,
                "tileh": 170,
                "map": {
                    "YingYangSprite": [0,0]
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
            Crafty.scene('safe-area');
        }
    });

});


'use strict';

(() => {

const calculateVelocity = function (dx, dy) {
    var dt, vy, vx, gravity;

    if (dy < 0 && !this._gravityActive) {
        // Alternative idea: slightly variable x speed based off of dx, and
        // calculating everything else from there
        vx = dx*2; // This number's calculation needs fine-tuning
        dt = dx/vx;
        gravity = 2*-dy/(dt*dt);

        this.gravityConst(gravity);
        this.trigger('LiftedOffGround');

        vy = -Math.sqrt(-dy*this.ay*2);

        this.trigger('LiftedOffGround');
        vy = -Math.sqrt(-dy*this.ay*2);
        dt = Math.sqrt(2*-dy/this.ay);
        vx = dx/dt;
    } else {
        vy = this.vy;
        vx = this.vx;
    }

    return {vy: vy, vx: vx};
};

Crafty.c('Entity', {
    init: function () {
        this.requires('DOM, Color, Gravity, Collision');
        this.bind('LandedOnGround', () => {
            let knockAudio = 'knock2';
            Crafty.audio.play(knockAudio);
            this.attr({vx: 0});
        });

        this.gravity('Platform');
        this.gravityConst(2000);
    },
    jump: function (x, y) {
        var attr, midY, bottomY, midX, dx, dy;

        // Alternative: apex is at middle of player rectangle
        // Consideration for further iterations
        midY = this.y + this.h/2;
        bottomY = this.y + this.h;
        midX = this.x + this.w/2;

        dx = x - midX;
        dy = y - bottomY;

        attr = calculateVelocity.apply(this, [dx, dy]);
        this.attr(attr);
        return this;
    },
    getSprite: () => null,
    attachSprite: function (name) {

        let render = Crafty.e(name, 'DOM', 'Color', 'SpriteAnimation');
        render.attr({
            x: this.x - 35,
            y: this.y - 43,
        });
        this.attach(render);

        render.reel('Standing', 1000, 0, 0, 3);
        render.reel('Running', 1000, 3, 0, 3);
        render.reel('Jumping', 1000, 6, 0, 3);

        render.reel('UpAttackGrounded', 1000, 0, 1, 3);
        render.reel('UpAttackAir', 1000, 3, 1, 3);

        render.reel('UpSideAttackGrounded', 1000, 0, 2, 3);
        render.reel('UpSideAttackAir', 1000, 3, 2, 3);

        render.reel('SideAttackGrounded', 1000, 0, 3, 3);
        render.reel('SideAttackAir', 1000, 3, 3, 3);

        render.reel('DownSideAttackGrounded', 1000, 0, 4, 3);
        render.reel('DownSideAttackAir', 1000, 3, 4, 3);

        render.reel('DownAttackGrounded', 1000, 0, 5, 3);
        render.reel('DownAttackAir', 1000, 3, 5, 3);

        render.animate('Standing', -1);

        this.getSprite = function () {
            return render;
        }

        return this;
    }
});

Crafty.c('Kunoichi', {
    init: function () {
        this.requires('Collision');
        let sword = swordConstructor(this);
        this.attack = sword.attack.bind(sword);

        this.checkHits('Sword');
        this.bind('HitOn', function (e) {
            if (e[0]['obj'] !== sword) {
                this.trigger('TakeHit');
            }
        });
        this.bind('SwordSplosion', function (e) {
            if (e.sword === sword) {
                sword.glow();
                let dirx = e.x - this.attr("x");
                if (dirx > 0) {
                    this.jump(this.attr("x") - 50, this.attr("y") - 50);
                }
                else {
                    this.jump(this.attr("x") + 50, this.attr("y") + 50);
                }
            }
        });
    },
    attack: () => null
});

})();


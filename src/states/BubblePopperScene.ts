import * as Phaser from 'phaser'

export class BubblePopperScene extends Phaser.State {
    bubble: Phaser.Sprite;
    waypoint : Phaser.Sprite;

    waypoints: Array<Phaser.Point>;
    currentWaypoint: number;
    speed: number = 1;

    init(args: any): void {
        this.currentWaypoint = 0;

        // let banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'Test')
        // banner.font = 'Nunito'
        // banner.fontSize = 40
        // banner.fill = '#77BFA3'
        // banner.anchor.setTo(0.5)

        // this.onSwipeHandler = new Phaser.Signal();
        //
        // this.game.input.addMoveCallback(this.moveCallback, this);
        //
        // this.gameLayer = this.game.add.sprite(this.tileWidth, this.tileHeight);
        // var gameViewController = new GameViewController(this);
        this.bubble = this.add.sprite(0, 0, 'gem');
        this.waypoint = this.add.sprite(0, 0, 'gem');

        this.waypoints = [];
        var width = this.game.width;
        var height = this.game.height;

        for (var i = 0; i < 10; i++) {
            this.waypoints.push(new Phaser.Point(Math.random() * width, Math.random() * height));
        }

    }

    normalizeNumber(value: number): number {
        if (value > 0)
            value = 1;
        if (value < 0)
            value = -1;
        return value;
    }

    preload() {
    }

    create() {

    }

    render() {
    }

    update() {
        var wp = this.waypoints[this.currentWaypoint];
        this.waypoint.x = wp.x;
        this.waypoint.y = wp.y;

        var dx = wp.x - this.bubble.x;
        var dy = wp.y - this.bubble.y;

        if (dx < 1 && dy < 1)
            this.currentWaypoint++;

        this.bubble.x += this.sign(dx) * this.speed;
        this.bubble.y += this.sign(dy) * this.speed;
    }

    sign(value:number):number {
        return value > 0 ? 1 : -1;
    }
}
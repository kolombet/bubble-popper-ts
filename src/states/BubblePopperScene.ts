import * as Phaser from 'phaser'

export class BubblePopperScene extends Phaser.State {

    init(args: any): void {
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
        this.add.sprite(0, 0, 'gem');
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

    }
}
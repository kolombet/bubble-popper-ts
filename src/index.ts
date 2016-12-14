/// <reference path="../typings/index.d.ts"/>
/// <reference path="../lib/phaser.d.ts"/>
import * as Phaser from 'phaser'

import {BootState} from './states/BootState.ts'
import {SplashState} from './states/SplashState.ts'
import {BubblePopperScene} from "./states/BubblePopperScene.ts";

class Game extends Phaser.Game {

  constructor () {
    let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight;

    super(width, height, Phaser.AUTO, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', BubblePopperScene, false);

    this.state.start('Boot')
  }
}

new Game();

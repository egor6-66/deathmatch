import * as BABYLON from '@babylonjs/core';
import { Scene } from '@babylonjs/core';

import { IOptions } from './interfeces';
import { FirstPerson } from './scenes';

class Engine {
    private engine: BABYLON.Engine;
    private scene: BABYLON.Scene;
    private canvas: HTMLCanvasElement;
    private options: IOptions;

    constructor(canvas: HTMLCanvasElement, options: IOptions) {
        this.options = options;
        this.engine = new BABYLON.Engine(canvas);
        this.scene = new Scene(this.engine);
        this.canvas = canvas;
        this.runScene();
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    runScene() {
        switch (this.options.mode) {
            case 'battlefield':
                new FirstPerson(this.engine, this.scene, this.canvas, this.options);
                break;
        }
    }
}

export default Engine;

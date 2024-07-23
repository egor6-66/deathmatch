import { DirectionalLight, Engine, HemisphericLight, Scene, Vector3 } from '@babylonjs/core';

import { IOptions } from '../../interfeces';

import { addGun, Attack, createController, createEnvironment } from './utils';

class FirstPersonScene {
    private engine: Engine;
    private readonly scene: Scene;
    private camera: any;
    private readonly canvas: HTMLCanvasElement;
    private options: IOptions;

    constructor(engine: Engine, scene: Scene, canvas: HTMLCanvasElement, options: IOptions) {
        this.engine = engine;
        this.scene = scene;
        this.canvas = canvas;
        this.options = options;
        this.createScene();
    }

    createScene() {
        createEnvironment(this.scene).then(() => '');
        this.camera = createController(this.scene);
        addGun(this.scene, this.camera).then(() => '');

        new Attack(this.scene, this.canvas, this.options.weapon);
        new HemisphericLight('hemi', new Vector3(0, 1, 0), this.scene);

        this.scene.onPointerDown = (evt) => {
            if (evt.button === 0) this.engine.enterPointerlock();
            if (evt.button === 1) this.engine.exitPointerlock();
        };

        const framesPerSecond = 60;
        const gravity = -9.81;
        this.scene.gravity = new Vector3(0, gravity / framesPerSecond, 0);
        this.scene.collisionsEnabled = true;

        new DirectionalLight('light', new Vector3(1, -1, 0), this.scene);

        return this.scene;
    }
}

export default FirstPersonScene;

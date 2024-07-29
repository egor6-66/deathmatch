import { Camera, DirectionalLight, Engine, HemisphericLight, Matrix, Scene, Vector3 } from '@babylonjs/core';

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
        // this.setPosition();
    }

    // setPosition() {
    //     const invertCameraViewProj = Matrix.Invert(this.camera.getTransformationMatrix());
    //     const fromLeft = false;
    //     const meshWidthInPixels = 2000;
    //     const screenWidth = this.scene.getEngine().getRenderWidth(true);
    //     const spacingWithBorder = spacingWithBorderInPixels / screenWidth;
    //
    //     const h = meshWidthInPixels / screenWidth;
    //
    //     const pOfst = fromLeft ? -1 + spacingWithBorder * 2 : 1 - h * 2 - spacingWithBorder * 2;
    //
    //     const p = new Vector3(-1, -1, -1 + 0.0001);
    //     const q = new Vector3(-1 + 2 * h, -1, -1 + 0.0001);
    //
    //     const pt = Vector3.TransformCoordinates(p, invertCameraViewProj);
    //     const qt = Vector3.TransformCoordinates(q, invertCameraViewProj);
    //     const d = qt.subtract(pt).length();
    //
    //     mesh.scaling = new Vector3(d, d, d);
    //
    //     p.x = pOfst;
    //
    //     mesh.rotation = camera.rotation;
    //     mesh.position = BABYLON.Vector3.TransformCoordinates(p, invertCameraViewProj);
    // }

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

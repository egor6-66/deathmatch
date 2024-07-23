import { Scene, UniversalCamera, Vector3 } from '@babylonjs/core';

function createController(scene: Scene) {
    const camera = new UniversalCamera('camera', new Vector3(0, 23, 0), scene);

    camera.attachControl();
    camera.applyGravity = true;
    camera.checkCollisions = true;

    camera.minZ = 0.45;
    camera.speed = 0.3;
    camera.angularSensibility = 4000;

    camera.keysUp.push(87);
    camera.keysLeft.push(65);
    camera.keysDown.push(83);
    camera.keysRight.push(68);

    //ускорение
    // camera.fov = 2.024394;
    document.onkeydown = (e) => {
        if (e.code === 'Space') camera.cameraDirection.y += 0.5;
    };

    // scene.onBeforeRenderObservable.add((eventData) => {});

    return camera;
}

export default createController;

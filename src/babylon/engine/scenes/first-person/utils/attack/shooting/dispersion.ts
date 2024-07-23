import { Scene } from '@babylonjs/core';

import IAttack from '../interface';

class Dispersion implements IAttack {
    scene: Scene;

    lock: boolean;

    constructor(scene: Scene) {
        this.scene = scene;
        this.lock = false;
    }

    start(lock: boolean) {
        const weaponRecoil = 10;
        let currentTime = 0;
        let currentReverseTime = currentTime;
        this.lock = lock;
        this.scene.onBeforeRenderObservable.add((eventData) => {
            const { cameraRotation } = eventData.cameras[0] as any;

            if (weaponRecoil > currentTime) {
                cameraRotation.x -= 0.002;
                currentTime++;
                currentReverseTime++;
            } else if (!this.lock && currentReverseTime > 0) {
                cameraRotation.x += 0.002;
                currentReverseTime--;
            }
        });
    }

    stop(lock: boolean) {
        this.lock = lock;
    }
}

export default Dispersion;

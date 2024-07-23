import { Scene } from '@babylonjs/core';

import { IOptions } from '../../../../interfeces';

import IAttack from './interface';
import { Dispersion, PickingRay } from './shooting';

type Weapon = IOptions['weapon'];

class Attack {
    private readonly scene: Scene;
    private canvas: HTMLCanvasElement;
    private weapon: Weapon;
    private dispersion: IAttack;
    private pickingRay: IAttack;
    lock: boolean;

    constructor(scene: Scene, canvas: HTMLCanvasElement, weapon: Weapon) {
        this.scene = scene;
        this.canvas = canvas;
        this.weapon = weapon;
        this.dispersion = new Dispersion(this.scene);
        this.pickingRay = new PickingRay(this.scene);
        this.lock = false;
        this.startAttack();
        this.endAttack();
    }

    startAttack() {
        this.canvas.addEventListener('mousedown', () => {
            switch (this.weapon.type) {
                case 'fireArms':
                    this.lock = true;
                    this.pickingRay.start(this.lock);
                    this.dispersion.start(this.lock);
            }
        });
    }

    endAttack() {
        this.canvas.addEventListener('mouseup', () => {
            switch (this.weapon.type) {
                case 'fireArms':
                    this.lock = false;
                    this.pickingRay.stop(this.lock);
                    this.dispersion.stop(this.lock);
            }
        });
    }
}

export default Attack;

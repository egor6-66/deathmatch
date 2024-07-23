import { Matrix, MeshBuilder, PBRMaterial, Scene, Texture, Vector3 } from '@babylonjs/core';

import IAttack from '../interface';

class PickingRay implements IAttack {
    scene: Scene;
    lock: boolean;
    img!: PBRMaterial;

    constructor(scene: Scene) {
        this.scene = scene;
        this.lock = false;
        this.physics();
    }

    physics() {
        const img = new PBRMaterial('img', this.scene);
        img.roughness = 1;
        img.albedoTexture = new Texture('/img/hole.png', this.scene);
        img.albedoTexture.hasAlpha = true;
        img.zOffset = -0.25;
        img.pointSize = 2000;

        // Ammo().then((ammo) => {
        //     const physics = new AmmoJSPlugin(true, ammo);
        //     this.scene.enablePhysics(new Vector3(0, -9.81, 0), physics);
        // });
        this.img = img;
    }

    start(lock: boolean) {
        this.lock = lock;
        const ray = this.scene.createPickingRay(window.innerHeight / 2, window.innerWidth / 2, Matrix.Identity(), this.scene.cameras[0]);

        if (ray) {
            const raycastHit = this.scene.pickWithRay(ray) as any;

            if (raycastHit.hit) {
                const decal = MeshBuilder.CreateDecal('decal', raycastHit.pickedMesh, {
                    position: raycastHit.pickedPoint,
                    normal: raycastHit.getNormal(true),
                    size: new Vector3(1, 1, 1),
                } as any);

                decal.material = this.img;
                decal.setParent(raycastHit.pickedMesh);
            }
        }
    }

    stop(lock: boolean) {
        this.lock = lock;
    }
}

export default PickingRay;

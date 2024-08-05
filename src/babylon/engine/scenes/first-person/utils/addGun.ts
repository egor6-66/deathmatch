import { Camera, Scene, SceneLoader, Vector3 } from '@babylonjs/core';
import * as GUI from '@babylonjs/gui';

import '@babylonjs/loaders';

async function addGun(scene: Scene, camera: Camera) {
    if (scene.activeCameras?.length === 0) {
        scene?.activeCamera && scene.activeCameras.push(scene.activeCamera);
    }

    const { meshes, animationGroups } = await SceneLoader.ImportMeshAsync('', '/models/', 'test.glb', scene);
    const g = meshes[0];

    animationGroups[0].stop();
    animationGroups[9].start();
    // g.renderingGroupId = 1;
    // g.material = gunMat;
    // g.ellipsoid = new Vector3(8, 3, 3);
    const advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI('Ui');
    const crosschair = new GUI.Image('b1', '/img/prec.png');
    crosschair.width = '110px';
    crosschair.height = '80px';
    crosschair.color = 'transparent';
    advancedTexture.addControl(crosschair);
    g.checkCollisions = true;
    g.parent = camera;
    g.position = new Vector3(-0.1, -0.1, 0.7);
    g.scaling.scaleInPlace(0.02);
}

export default addGun;

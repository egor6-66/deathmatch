import { AbstractMesh, Scene, SceneLoader } from '@babylonjs/core';

import '@babylonjs/loaders';

async function createEnvironment(scene: Scene): Promise<Array<AbstractMesh>> {
    try {
        const { meshes } = await SceneLoader.ImportMeshAsync('', '/environment/', 'cs_italy_winter.glb', scene);
        meshes.forEach((mesh) => {
            mesh.checkCollisions = true;
        });

        return meshes;
    } catch (e) {
        return [];
    }
}

export default createEnvironment;

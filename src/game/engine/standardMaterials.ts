import { Engine, HemisphericLight, Mesh, MeshBuilder, Scene, UniversalCamera, Vector3 } from '@babylonjs/core';

class StandardMaterials {
    private scene: Scene;
    private engine: Engine;

    constructor(canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas, true);
        this.scene = this.createScene();
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    createScene(): Scene {
        const scene = new Scene(this.engine);
        const camera: UniversalCamera = new UniversalCamera('camera', new Vector3(0, 3, -20), scene);
        camera.attachControl();

        const hemiLight: HemisphericLight = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

        hemiLight.intensity = 0.5;

        // const ground: GroundMesh = MeshBuilder.CreateGround(
        //     'ground',
        //     {
        //         width: 20,
        //         height: 20,
        //         subdivisions: 1000,
        //         updatable: true,
        //     },
        //     scene
        // );

        const ball: Mesh = MeshBuilder.CreateSphere(
            'ball',
            {
                diameter: 2,
            },
            scene
        );

        ball.position = new Vector3(0, 1, 0);

        return scene;
    }
}

export default StandardMaterials;

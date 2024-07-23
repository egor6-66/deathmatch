import * as Babylon from '@babylonjs/core';

class Test {
    private scene: Babylon.Scene;
    private engine: Babylon.Engine;
    private canvas: HTMLCanvasElement;
    private uvScale = 2;

    constructor(canvas: HTMLCanvasElement) {
        this.engine = new Babylon.Engine(canvas);
        this.scene = this.createScene();
        this.canvas = canvas;
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    createScene(): Babylon.Scene {
        const scene = new Babylon.Scene(this.engine);
        scene.gravity = new Babylon.Vector3(0, -0.75, 0);
        scene.collisionsEnabled = true;
        scene.enablePhysics();
        ///////////////////////////////////////////////////////////////////////////
        const camera: Babylon.UniversalCamera = new Babylon.UniversalCamera('camera', new Babylon.Vector3(0, 3, -20), scene);
        camera.setTarget(Babylon.Vector3.Zero());
        camera.applyGravity = true;
        camera.ellipsoid = new Babylon.Vector3(2, 4, 3);
        camera.checkCollisions = true;
        camera.attachControl(this.canvas, true);

        ///////////////////////////////////////////////////////////////////////////
        camera.keysUp.push(87);
        camera.keysDown.push(83);
        camera.keysRight.push(68);
        camera.keysLeft.push(65);

        ///////////////////////////////////////////////////////////////////////////
        const ground: Babylon.GroundMesh = Babylon.MeshBuilder.CreateGround(
            'ground',
            {
                width: 20,
                height: 20,
                subdivisions: 1000,
                updatable: true,
            },
            scene
        );

        ground.applyDisplacementMap(
            '/assets/images/textures/ground/displacementInvert.png',
            0,
            0.6,
            undefined,
            undefined,
            new Babylon.Vector2(this.uvScale, this.uvScale)
        );
        ground.material = this.createGroundMaterial();

        const ball: Babylon.Mesh = Babylon.MeshBuilder.CreateSphere(
            'ball',
            {
                diameter: 2,
            },
            scene
        );

        ball.position.y = 3;
        // const light: Babylon.DirectionalLight = new Babylon.DirectionalLight('light', new Babylon.Vector3(1, -1, 0), scene);

        return scene;
    }

    createGroundMaterial(): Babylon.StandardMaterial {
        const groundMat = new Babylon.StandardMaterial('groundMat', this.scene);
        const textureArr: Array<Babylon.Texture> = [];
        const diffuseTex = new Babylon.Texture('/assets/images/textures/ground/diffuse.png', this.scene);
        groundMat.diffuseTexture = diffuseTex;
        textureArr.push(diffuseTex);
        const AOTex = new Babylon.Texture('/assets/images/textures/ground/ao.png', this.scene);
        groundMat.ambientTexture = AOTex;
        textureArr.push(AOTex);
        const normalTex = new Babylon.Texture('/assets/images/textures/ground/normal.png', this.scene);
        groundMat.bumpTexture = normalTex;
        groundMat.invertNormalMapX = true;
        groundMat.invertNormalMapY = true;
        textureArr.push(normalTex);
        const roughTex = new Babylon.Texture('/assets/images/textures/ground/rough.png', this.scene);
        groundMat.specularTexture = roughTex;
        textureArr.push(roughTex);
        groundMat.specularPower = 1000;
        textureArr.forEach((i) => {
            i.uScale = this.uvScale;
            i.vScale = this.uvScale;
        });

        return groundMat;
    }

    // createBallMaterial(): Babylon.StandardMaterial {}
}

export default Test;

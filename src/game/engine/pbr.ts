import { CubeTexture, Engine, GroundMesh, HemisphericLight, Mesh, MeshBuilder, PBRMaterial, Scene, Texture, UniversalCamera, Vector3 } from '@babylonjs/core';

class PBR {
    private scene: Scene;
    private engine: Engine;

    constructor(canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas, true);
        this.scene = this.createScene();
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
        this.createEnvironment();
    }

    createScene(): Scene {
        const scene = new Scene(this.engine);
        const camera: UniversalCamera = new UniversalCamera('camera', new Vector3(0, 3, -20), scene);
        camera.attachControl();
        camera.speed = 0.25;

        const hemiLight: HemisphericLight = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

        hemiLight.intensity = 0;

        const envTex = CubeTexture.CreateFromPrefilteredData('/assets/images/boxes/environment.env', scene);
        scene.environmentTexture = envTex;

        scene.createDefaultSkybox(envTex, true);

        return scene;
    }

    createEnvironment() {
        const ground: GroundMesh = MeshBuilder.CreateGround(
            'ground',
            {
                width: 20,
                height: 20,
                subdivisions: 1000,
                updatable: true,
            },
            this.scene
        );

        const ball: Mesh = MeshBuilder.CreateSphere(
            'ball',
            {
                diameter: 2,
            },
            this.scene
        );

        ball.position = new Vector3(0, 1, 0);
        ball.material = this.createMagic();
        ground.material = this.createAsphalt();
    }

    createAsphalt(): PBRMaterial {
        const pbr = new PBRMaterial('pbr', this.scene);

        pbr.albedoTexture = new Texture('/assets/images/textures/asphalt/dif.png', this.scene);
        pbr.bumpTexture = new Texture('/assets/images/textures/asphalt/normal.png', this.scene);
        pbr.invertNormalMapY = true;
        pbr.invertNormalMapX = true;
        pbr.useAmbientOcclusionFromMetallicTextureRed = true;
        pbr.useRoughnessFromMetallicTextureGreen = true;
        pbr.useMetallnessFromMetallicTextureBlue = true;
        pbr.metallicTexture = new Texture('/assets/images/textures/asphalt/normal.png', this.scene);

        return pbr;
    }

    createMagic(): PBRMaterial {
        const pbr = new PBRMaterial('pbr', this.scene);
        pbr.roughness = 1;

        return pbr;
    }
}

export default PBR;

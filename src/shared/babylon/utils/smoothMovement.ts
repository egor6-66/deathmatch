import { Animation, Camera, Scene, Vector3 } from '@babylonjs/core';

interface ISmooth {
    scene: Scene;
    camera: Camera;
    frameEnd: number;
    coords: IVector3;
}

function smoothMovement(props: ISmooth) {
    const { camera, frameEnd = 60, scene, coords } = props;
    const fps = 60;
    const slideFrames: any[] = [];

    const slideAnim = new Animation('slideAnim', 'position', fps, Animation.ANIMATIONTYPE_VECTOR3, Animation.ANIMATIONLOOPMODE_CONSTANT);

    const currentPos = camera.position;
    slideFrames.push({ frame: 0, value: new Vector3(currentPos.x, currentPos.y, currentPos.z) });
    slideFrames.push({ frame: frameEnd, value: new Vector3(coords.x, coords.y, coords.z) });

    slideAnim.setKeys(slideFrames);
    camera.animations.push(slideAnim);

    scene.beginAnimation(camera, 0, frameEnd);
}

export default smoothMovement;

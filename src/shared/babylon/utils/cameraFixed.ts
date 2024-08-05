import { Camera } from '@babylonjs/core';

function cameraFixed(camera: Camera, width: number, height: number) {
    if (width > height) {
        camera.fovMode = Camera.FOVMODE_HORIZONTAL_FIXED;
    } else {
        camera.fovMode = Camera.FOVMODE_VERTICAL_FIXED;
    }
}

export default cameraFixed;

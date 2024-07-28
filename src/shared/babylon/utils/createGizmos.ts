import { GizmoManager, Light, LightGizmo, Scene } from '@babylonjs/core';

function createGizmos(scene: Scene, light: Light): void {
    const lightGizmo = new LightGizmo();
    lightGizmo.scaleRatio = 2;
    lightGizmo.light = light;

    const gizmoManager = new GizmoManager(scene);
    gizmoManager.positionGizmoEnabled = true;
    gizmoManager.rotationGizmoEnabled = true;
    gizmoManager.usePointerToAttachGizmos = false;
    gizmoManager.attachToMesh(lightGizmo.attachedMesh);
}

export default createGizmos;

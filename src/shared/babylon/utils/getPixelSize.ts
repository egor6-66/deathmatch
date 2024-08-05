// import { Matrix, Vector3 } from '@babylonjs/core';

function getPixelSize() {
    // if (!engine || !camera || !scene) return;
    //
    // //note: "engine" is your babylonjs engine variable
    // //note: "camera" is the camera variable, optionally you can pass the camera as function parameter (change this function to accept second parameter)
    // const temp = new Vector3();
    // const vertices = meshRef.current.getBoundingInfo().boundingBox.vectorsWorld;
    // const viewport = camera.viewport.toGlobal(engine.getRenderWidth(), engine.getRenderHeight());
    // let minX = 1e10,
    //     minY = 1e10,
    //     maxX = -1e10,
    //     maxY = -1e10;
    //
    // for (const vertex of vertices) {
    //     Vector3.ProjectToRef(vertex, Matrix.IdentityReadOnly, scene.getTransformMatrix(), viewport, temp);
    //     if (minX > temp.x) minX = temp.x;
    //     if (maxX < temp.x) maxX = temp.x;
    //     if (minY > temp.y) minY = temp.y;
    //     if (maxY < temp.y) maxY = temp.y;
    // }
    //
    // //console.log("maxX-minX",(maxX-minX));
    // //console.log("maxY-minY",(maxY-minY));
    // return { x: maxX - minX, y: maxY - minY };
}

export default getPixelSize;

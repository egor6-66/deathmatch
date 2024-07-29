import { Scene } from '@babylonjs/core';

interface ISmooth {
    scene: Scene;
    speed: number;
    coords: ICoords;
}

function smoothMovement(props: ISmooth) {
    const { speed = 0.8, scene, coords } = props;

    const done: Record<string, boolean> = { x: false, y: false };

    const methods = { x: '', y: '' } as Record<string, string>;

    const observer = scene.onBeforeRenderObservable!.add((eventData) => {
        const camera = eventData.cameras[0];
        const cameraPosition = camera.position as any;

        if (coords) {
            Object.entries(coords).forEach(([key, targetPosition]) => {
                const currentPosition = cameraPosition[key];

                if (!methods[key]) {
                    methods[key] = currentPosition > targetPosition ? 'dec' : 'inc';
                }

                if (methods[key] === 'dec') {
                    if (currentPosition > targetPosition) {
                        cameraPosition[key] -= speed / 10;
                    } else {
                        done[key] = true;
                    }
                } else {
                    if (currentPosition < targetPosition) {
                        cameraPosition[key] += speed / 10;
                    } else {
                        done[key] = true;
                    }
                }
            });
        }

        if (done.x && done.y) {
            scene?.onBeforeRenderObservable.remove(observer);
        }
    });
}

export default smoothMovement;

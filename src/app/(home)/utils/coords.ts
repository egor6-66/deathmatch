import { Pages } from './SetCoords';
interface ICoords {
    x: number;
    y: number;
}
const twoLvl = -0.4;
const oneLvl = -2.8;

const coords: Record<Pages, ICoords> = {
    SERVER: { x: -3, y: twoLvl },
    MAIN: { x: 0, y: twoLvl },
    OPTIONS: { x: 3, y: twoLvl },
    LOGIN: { x: 1.9, y: oneLvl },
    REGISTRATION: { x: -1.9, y: oneLvl },
};

export type { Pages };
export default coords;

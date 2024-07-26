import { Pages } from '@/app/home/utils/SetCoords';
interface ICoords {
    x: number;
    y: number;
}
const twoLvl = -0.9;
const oneLvl = -2.7;

const coords: Record<Pages, ICoords> = {
    SERVER: { x: -3, y: twoLvl },
    MENU: { x: 0, y: twoLvl },
    OPTIONS: { x: 3, y: twoLvl },
    LOGIN: { x: 2, y: oneLvl },
    REGISTRATION: { x: -2, y: oneLvl },
};

export type { Pages };
export default coords;

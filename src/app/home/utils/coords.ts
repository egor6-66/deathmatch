import { Pages } from '@/app/home/utils/SetCoords';
interface ICoords {
    x: number;
    y: number;
}
const twoLvl = 1;
const oneLvl = -1;

const coords: Record<Pages, ICoords> = {
    SERVER: { x: -2.5, y: twoLvl },
    MENU: { x: 0, y: twoLvl },
    OPTIONS: { x: 2.5, y: twoLvl },
    LOGIN: { x: 1.8, y: oneLvl },
    REGISTRATION: { x: -1.8, y: oneLvl },
};

export type { Pages };
export default coords;

import { Pages } from '@/shared/interfaces';

interface ICoords {
    x: number;
    y: number;
}
const twoLvl = -0.4;
const oneLvl = -2.8;

export const homePages: Record<Pages.HomePages, ICoords> = {
    SERVER: { x: -3, y: twoLvl },
    MAIN: { x: 0, y: twoLvl },
    OPTIONS: { x: 3, y: twoLvl },
    LOGIN: { x: 1.9, y: oneLvl },
    REGISTRATION: { x: -1.9, y: oneLvl },
};

export type { Pages };

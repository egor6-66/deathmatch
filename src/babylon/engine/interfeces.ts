import { IWeapon } from '@/entities/weapons';

export interface IOptions {
    mode: 'battlefield' | 'auth-menu';
    weapon: IWeapon;
}

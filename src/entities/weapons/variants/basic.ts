export interface IBasic {
    damage: number;
}

class Basic {
    damage: number;

    constructor({ damage }: IBasic) {
        this.damage = damage;
    }
}

export default Basic;

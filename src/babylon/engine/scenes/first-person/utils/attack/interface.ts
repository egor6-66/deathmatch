interface IAttack {
    start: (lock: boolean) => void;
    stop: (lock: boolean) => void;
}

export default IAttack;

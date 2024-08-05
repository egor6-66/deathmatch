export interface IProps<T = any> {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    payload?: T;
    onClose?: () => void;
}

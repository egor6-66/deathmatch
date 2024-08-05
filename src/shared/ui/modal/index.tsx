import { ForwardRefExoticComponent } from 'react';

import * as ModalTypes from './interface';
import ModalComponent from './modal';
import use from './use';

type CompoundedComponent = ForwardRefExoticComponent<ModalTypes.IProps> & {
    use: typeof use;
};

const Modal = ModalComponent as CompoundedComponent;
Modal.use = use;

export type { ModalTypes };
export default Modal;

import { ForwardRefExoticComponent } from 'react';

import InputComponent from './input';
import * as InputTypes from './interface';
import use from './use';

type CompoundedComponent = ForwardRefExoticComponent<InputTypes.IProps> & {
    use: typeof use;
};

const Input = InputComponent as CompoundedComponent;
Input.use = use;

export type { InputTypes };
export default Input;

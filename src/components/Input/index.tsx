import React, { InputHTMLAttributes } from 'react';

import { InputStyle } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ ...rest }) => {
    return (
        <InputStyle {...rest} />
    )
}

export default Input;

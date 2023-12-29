import React from 'react';
import { MouseEventHandler } from 'react';
import { Container } from './styles';

interface Props {
    onClickHandler?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, onClickHandler = undefined, disabled }) => {
    return (
        <Container onClick={onClickHandler} disabled={disabled}>
            {children}
        </Container>
    );
};

export default Button;

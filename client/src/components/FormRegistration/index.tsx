import React, { useState } from 'react';
import FormItem from './../FormItem';
import Button from './../Button';
import { Container } from './styles';
import { registration } from '../../actions/user';

const FormRegistration: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(email);

    return (
        <Container>
            <FormItem label="Email" type="email" onChangeHandler={setEmail} value={email} />
            <FormItem
                label="Password"
                type="password"
                onChangeHandler={setPassword}
                value={password}
            />
            <Button onClickHandler={() => registration(email, password)}>Registration</Button>
        </Container>
    );
};

export default FormRegistration;

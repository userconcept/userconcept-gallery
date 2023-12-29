import React from 'react';
import FormLogin from './../../components/FormLogin';
import { Container, Center } from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <Center>
                <FormLogin />
            </Center>
        </Container>
    );
};

export default Login;

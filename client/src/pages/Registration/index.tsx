import React from 'react';
import FormRegistration from './../../components/FormRegistration';
import { Container, Center } from './styles';

const Registration: React.FC = () => {
    return (
        <Container>
            <Center>
                <FormRegistration />
            </Center>
        </Container>
    );
};

export default Registration;

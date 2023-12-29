import React from 'react';
import PhotosList from './../../components/PhotosList';
import { Container, Center } from './styles';

const Photos: React.FC = () => {
    return (
        <Container>
            <Center>
                <PhotosList />
            </Center>
        </Container>
    );
};

export default Photos;

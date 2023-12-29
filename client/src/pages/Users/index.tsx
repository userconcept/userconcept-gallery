import React from 'react';
import UsersList from './../../components/UsersList';
import { Container, Center } from './styles';

const Users: React.FC = () => {
    return (
        <Container>
            <Center>
                <UsersList />
            </Center>
        </Container>
    );
};

export default Users;

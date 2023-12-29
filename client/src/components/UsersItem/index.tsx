import React from 'react';
import { IUsersItem } from './../../interfaces';
import { Container } from './styles';

interface Props {
    obj: IUsersItem;
}

const UsersItem: React.FC<Props> = ({ obj }) => {
    return <Container>{obj.name}</Container>;
};

export default UsersItem;

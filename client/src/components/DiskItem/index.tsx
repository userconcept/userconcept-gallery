import React from 'react';
import { IDiskItem } from './../../interfaces';
import { Container, Name, Type, Size, Date } from './styles';

interface Props {
    obj: IDiskItem;
}

const DiskItem: React.FC<Props> = ({ obj }) => {
    return (
        <Container>
            <Name>{obj.name}</Name>
            <Type>{obj.type}</Type>
            <Date>{obj.date.slice(0, 10)}</Date>
            <Size>{obj.size}</Size>
        </Container>
    );
};

export default DiskItem;

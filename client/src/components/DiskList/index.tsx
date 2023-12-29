import React from 'react';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import DiskItem from './../DiskItem';
import { IDiskItem } from './../../interfaces';
import { Container, Header, Name, Date, Size } from './styles';

const DiskList: React.FC = () => {
    const files = useTypedSelector<Array<IDiskItem>>((state) => state.files.files);
    console.log('files', files);

    return (
        <Container>
            <Header>
                <Name>Name</Name>
                <Date>Date</Date>
                <Size>Size</Size>
            </Header>
            {files.map((obj) => (
                <DiskItem obj={obj} key={obj._id} />
            ))}
        </Container>
    );
};

export default DiskList;

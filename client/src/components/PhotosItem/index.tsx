import React from 'react';
import Picture from './../Picture';
import { IPhotosItem } from './../../interfaces';
import { Container, Title, Text } from './styles';

interface Props {
    obj: IPhotosItem;
}

const PhotosItem: React.FC<Props> = ({ obj }) => {
    return (
        <Container>
            <Picture obj={obj.picture[0]} />
            <Title>{obj.title}</Title>
            <Text>{obj.text}</Text>
        </Container>
    );
};

export default PhotosItem;

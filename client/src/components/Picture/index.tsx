import React from 'react';
import { IPicture } from './../../interfaces';
import { Container, Source, Img } from './styles';

interface Props {
    obj: IPicture;
}

const Picture: React.FC<Props> = ({ obj }) => {
    return (
        <Container>
            <Source type="image/webp" srcSet={obj.src.imgSrcSetWebp} sizes={obj.sizes} />
            <Img
                srcSet={obj.src.imgSrcSetJpg}
                sizes={obj.sizes}
                src={obj.src.imgSrc}
                alt={obj.alt}
            />
        </Container>
    );
};

export default Picture;

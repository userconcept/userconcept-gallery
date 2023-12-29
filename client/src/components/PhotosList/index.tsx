import React, { useEffect, useState } from 'react';
// import { useTypedSelector } from './../../hooks/useTypedSelector';
// import { useActions } from './../../hooks/useActions';
import PhotosItem from './../PhotosItem';
import { Container, Pagination } from './styles';

const PhotosList: React.FC = () => {
    // const { photos, loading, error, page, limit } = useTypedSelector((state) => state.photo);
    // const { fetchPhotos, setPhotoPage } = useActions();
    const pages = [1, 2, 3, 4, 5];

    // useEffect(() => {
    //     fetchPhotos(page, limit);
    // }, [page]);

    // if (loading) {
    //     return <h2>Loading...</h2>;
    // }

    // if (error) {
    //     return <h2>{error}</h2>;
    // }

    return (
        <>
            <Container>
                {/* {items.map((obj) => (
                    <PhotosItem obj={obj} key={obj.id} />
                ))} */}

                {/* {photos.map((obj) => (
                    <div key={obj.id}>
                        {obj.id} - {obj.title}
                    </div>
                ))} */}
            </Container>
            {/* <Pagination>
                {pages.map((obj, i) => (
                    <div key={i} onClick={() => setPhotoPage(obj)}>
                        {obj}
                    </div>
                ))}
            </Pagination> */}
        </>
    );
};

export default PhotosList;

// const [items, setItems] = useState([
//     {
//         id: 0,
//         title: 'item 001',
//         text: 'Description about item 001',
//         picture: [
//             {
//                 id: 0,
//                 src: {
//                     imgSrcSetWebp:
//                         '/images/photos/PhotosItem__img_001_640.webp 640w, /images/photos/PhotosItem__img_001_750.webp 750w, /images/photos/PhotosItem__img_001_1080.webp 1080w',
//                     imgSrcSetJpg:
//                         '/images/photos/PhotosItem__img_001_640.jpg 640w, /images/photos/PhotosItem__img_001_750.jpg 750w, /images/photos/PhotosItem__img_001_1080.jpg 1080w',
//                     imgSrc: '/images/photos/PhotosItem__img_001_750.jpg',
//                 },
//                 sizes: '(min-width: 1200px) 22.3333333333vw, (min-width: 600px) 44.6666666667vw, 90vw',
//                 alt: 'Photos Item 001',
//             },
//         ],
//     },
//     {
//         id: 1,
//         title: 'item 002',
//         text: 'Description about item 002',
//         picture: [
//             {
//                 id: 0,
//                 src: {
//                     imgSrcSetWebp:
//                         '/images/photos/PhotosItem__img_001_640.webp 640w, /images/photos/PhotosItem__img_001_750.webp 750w, /images/photos/PhotosItem__img_001_1080.webp 1080w',
//                     imgSrcSetJpg:
//                         '/images/photos/PhotosItem__img_001_640.jpg 640w, /images/photos/PhotosItem__img_001_750.jpg 750w, /images/photos/PhotosItem__img_001_1080.jpg 1080w',
//                     imgSrc: '/images/photos/PhotosItem__img_001_750.jpg',
//                 },
//                 sizes: '(min-width: 1200px) 22.3333333333vw, (min-width: 600px) 44.6666666667vw, 90vw',
//                 alt: 'Photos Item 001',
//             },
//         ],
//     },
//     {
//         id: 2,
//         title: 'item 003',
//         text: 'Description about item 003',
//         picture: [
//             {
//                 id: 0,
//                 src: {
//                     imgSrcSetWebp:
//                         '/images/photos/PhotosItem__img_001_640.webp 640w, /images/photos/PhotosItem__img_001_750.webp 750w, /images/photos/PhotosItem__img_001_1080.webp 1080w',
//                     imgSrcSetJpg:
//                         '/images/photos/PhotosItem__img_001_640.jpg 640w, /images/photos/PhotosItem__img_001_750.jpg 750w, /images/photos/PhotosItem__img_001_1080.jpg 1080w',
//                     imgSrc: '/images/photos/PhotosItem__img_001_750.jpg',
//                 },
//                 sizes: '(min-width: 1200px) 22.3333333333vw, (min-width: 600px) 44.6666666667vw, 90vw',
//                 alt: 'Photos Item 001',
//             },
//         ],
//     },
//     {
//         id: 3,
//         title: 'item 004',
//         text: 'Description about item 004',
//         picture: [
//             {
//                 id: 0,
//                 src: {
//                     imgSrcSetWebp:
//                         '/images/photos/PhotosItem__img_001_640.webp 640w, /images/photos/PhotosItem__img_001_750.webp 750w, /images/photos/PhotosItem__img_001_1080.webp 1080w',
//                     imgSrcSetJpg:
//                         '/images/photos/PhotosItem__img_001_640.jpg 640w, /images/photos/PhotosItem__img_001_750.jpg 750w, /images/photos/PhotosItem__img_001_1080.jpg 1080w',
//                     imgSrc: '/images/photos/PhotosItem__img_001_750.jpg',
//                 },
//                 sizes: '(min-width: 1200px) 22.3333333333vw, (min-width: 600px) 44.6666666667vw, 90vw',
//                 alt: 'Photos Item 001',
//             },
//         ],
//     },
// ]);

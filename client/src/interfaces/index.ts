// import { FormEvent } from 'react';

export interface IPicture {
    id: number;
    src: {
        imgSrcSetWebp: string;
        imgSrcSetJpg: string;
        imgSrc: string;
    };
    sizes: string;
    alt: string;
}

export interface IPhotosItem {
    id: number;
    title: string;
    text: string;
    picture: Array<IPicture>;
}

export interface IUsersItem {
    id: number;
    name: string;
}

export interface IDiskItem {
    _id: string;
    name: string;
    type: string;
    size: string;
    date: string;
}

export interface IFormItem {
    label: string;
    type: string;
    onChangeHandler: (value: string) => void;
    value: string;
}

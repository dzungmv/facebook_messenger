'use client';

import Image, { StaticImageData } from 'next/image';
import { avatar } from '../../../public';

interface ImageProps {
    alt?: string;
    src?: StaticImageData | string;
    style?: string;
}

export default function ImageC({ alt = 'image', src, style }: ImageProps) {
    return (
        <Image
            className={style}
            alt={alt}
            src={src ?? ''}
            width='0'
            height='0'
            sizes='100vw'
        />
    );
}

export const Avatar = ({ alt = 'avatar', src, style }: ImageProps) => {
    return (
        <Image
            className={style}
            alt={alt}
            src={src ?? avatar}
            width='0'
            height='0'
            sizes='100vw'
        />
    );
};

'use client'

import NextImage from 'next/image';

import styles from './imageStyles';

interface ImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  objectFit?: 'contain' | 'cover'
  objectPosition?: string;
}

const Image = (props: ImageProps) => {
  const { src, alt, fill, objectFit = 'contain', objectPosition = 'center', sizes } = props;

  return (
    <NextImage
      src={src}
      alt={alt}
      fill={fill}
      style={styles.Image(objectFit, objectPosition)}
      sizes={sizes}
    />
  )
}

export default Image;
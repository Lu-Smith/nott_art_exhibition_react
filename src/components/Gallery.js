import React from 'react';
import { Image, Title, Container } from './styles/Gallery.styled';
import content from '../helpers/imagesList';

const Gallery = () => {
  return (
    <Container>
        {content.map((image, index) => {
            return (
                <div key={index}>
                    <Image src={image.src} alt={image.alt} />
                    <Title>{image.title}</Title>
                </div>
            )
        })}
       
    </Container>
  )
}

export default Gallery
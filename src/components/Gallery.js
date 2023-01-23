import React from 'react';
import { Image, Title, Container } from './styles/Gallery.styled';


const Gallery = (props) => {

  const rectangleNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
  return (
    <Container>
        <Image src={props.image.src} alt={props.image.alt} />
        {rectangleNumber.map((number, index) => {
          return <div className={"rectangle" + number} key={index}></div>
        })}
        <Title>{props.image.title}</Title>
    </Container>
  )
}

export default Gallery
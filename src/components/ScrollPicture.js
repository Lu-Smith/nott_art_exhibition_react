import React from 'react';
import { Container, Page } from './styles/ScrollPicture.styled';
import { changeSlide } from '../features/slideSlice';
import { useDispatch } from 'react-redux';

const ScrollPicture = (props) => {   
 

  const dispatch = useDispatch();

  return (
    <Container>
      {props.images.map((image) => {
              return <Page key={image.id} onClick={()=>dispatch(changeSlide())}>{image.id}</Page>
            })}
    </Container>
  )
}

export default ScrollPicture
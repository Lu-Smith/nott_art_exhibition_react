import React from 'react';
import { Container, Page } from './styles/ScrollPicture.styled';
import content from '../helpers/imagesList';
import { changeSlide } from '../features/slideSlice';
import { useDispatch } from 'react-redux';

const ScrollPicture = () => {   

  const dispatch = useDispatch();

  return (
    <Container>
      {content.map((page) => {
              return <Page key={page.id} onClick={()=>dispatch(changeSlide())}>{page.id}</Page>
            })}
    </Container>
  )
}

export default ScrollPicture
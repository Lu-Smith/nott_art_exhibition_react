import React from 'react';
import { Container, Page } from './styles/ScrollPicture.styled';
import content from '../helpers/imagesList';

const ScrollPicture = () => {   

  const handleClick = () => {
    alert("Hello");
  }

  return (
    <Container>
      {content.map((page) => {
              return <Page key={page.id} onClick={handleClick}>{page.id}</Page>
            })}
    </Container>
  )
}

export default ScrollPicture
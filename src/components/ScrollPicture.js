import React from 'react';
import { Container, Page } from './styles/ScrollPicture.styled';
import content from '../helpers/imagesList';

const ScrollPicture = () => {   

  return (
    <Container>
      {content.map((page) => {
              return <Page key={page.id}>{page.id}</Page>
            })}
    </Container>
  )
}

export default ScrollPicture
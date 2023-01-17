import React from 'react';
import { Container, Page } from './styles/ScrollPicture.styled';
import content from '../helpers/imagesList';

const ScrollPicture = (props) => {
    const pages = props.image;



  return (
    <Container>
      {content.map((page) => {
              return <Page >{page.id}</Page>
            })}
    </Container>
  )
}

export default ScrollPicture
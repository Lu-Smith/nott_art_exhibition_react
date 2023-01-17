import React from 'react';
import { Container, Page } from './styles/ScrollPicture.styled';
import content from '../helpers/imagesList';

const ScrollPicture = (props) => {   

  return (
    <Container>
      {content.map((page) => {
              return <Page onClick={props.executeScroll} key={page.id}>{page.id}</Page>
            })}
    </Container>
  )
}

export default ScrollPicture
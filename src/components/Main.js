import React from 'react'
import Control from './Control'
import Gallery from './Gallery'
import { Container, Description, Title } from './styles/Main.styled'

const Main = () => {
  return (
    <Container>
        <Title>Search though time</Title>
        <Gallery />
        <Control />
        <Description>We live in the endless loop of wonders.</Description>
    </Container>
  )
}

export default Main
import React from 'react'
import { Container } from './styles/Description.styled'

const Description = (props) => {
  return (
    <Container>
      <div>{props.description[0]}</div>
      <div>{props.description[1]}</div>
      <div>{props.description[2]}</div>
      <div>{props.description[3]}</div>
      <br />
      <div>{props.description[4]}</div>
      <div>{props.description[5]}</div>
      <div>{props.description[6]}</div>
      <div>{props.description[7]}</div>
      <br />
      <div>{props.description[8]}</div>
      <div>{props.description[9]}</div>
      <div>{props.description[10]}</div>
      <div>{props.description[11]}</div>
      <br />
      <div>{props.description[12]}</div>
      <div>{props.description[13]}</div>
      <div>{props.description[14]}</div>
      <div>{props.description[15]}</div>
      <br />
      <div>{props.description[16]}</div>
      <div>{props.description[17]}</div>
      <div>{props.description[18]}</div>
      <div>{props.description[19]}</div>
    </Container>
  )
}

export default Description
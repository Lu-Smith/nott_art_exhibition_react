import React from 'react'
import { Container, HalfStar1, HalfStar2 } from './styles/Description.styled'

const Description = (props) => {
  return (
    <Container>
      {props.description.map((description, index) => {
        if (index === 3 || index === 7 || index === 11 || index === 15) {
          return (
            <>
          <div key={index} className="description">{description}</div>
          <br/>
          </>
          )
        } else {
          return <div key={index}>{description}</div>
        }
      })}
      <HalfStar1 />
      <HalfStar2 />
    </Container>
  )
}

export default Description
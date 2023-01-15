import React from 'react';
import ScrollPicture from './ScrollPicture';
import { Button, Container} from './styles/Contol.styled';

const handleClick = () => {
  alert("Hello");
}

const Control = (props) => {

  return (
    <Container>
      <Button onClick={handleClick}>
          <span>
            Scroll to explore 
          </span>
          <span className="material-symbols-outlined">
            arrow_forward_ios
          </span>
          <span className="material-symbols-outlined">
            arrow_forward_ios
          </span>
      </Button>
      <ScrollPicture />
    </Container>
  )
}

export default Control
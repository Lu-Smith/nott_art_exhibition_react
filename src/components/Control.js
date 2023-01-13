import React from 'react';
import ScrollPicture from './ScrollPicture';
import { Button, Container} from './styles/Contol.styled';

const Control = (props) => {
  return (
    <Container>
      <Button>
          <span>
            Scroll to explore 
          </span>
          <span class="material-symbols-outlined">
            arrow_forward_ios
          </span>
          <span class="material-symbols-outlined">
            arrow_forward_ios
          </span>
      </Button>
      <ScrollPicture />
    </Container>
  )
}

export default Control
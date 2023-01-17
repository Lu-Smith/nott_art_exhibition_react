import React from 'react';
import { Button, Container} from './styles/Contol.styled';


const Control = (props) => {

  return (
    <Container>
      <Button>
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
    </Container>
  )
}

export default Control
import React from 'react';
import { Button, Container} from './styles/Contol.styled';
import { changeSlide } from '../features/slideSlice';
import { useDispatch } from 'react-redux';


const Control = (props) => {

  const dispatch = useDispatch();

  return (
    <Container>
      <Button onClick={()=>dispatch(changeSlide())}>
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
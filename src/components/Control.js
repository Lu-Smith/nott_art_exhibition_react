import React from 'react';
import { Button, Container} from './styles/Contol.styled';
import { changeSlide } from '../features/slideSlice';
import { useDispatch } from 'react-redux';


const Control = () => {

  const dispatch = useDispatch();

  const handleScroll = (event) => {
     event.preventDefault();
      event.stopPropagation();
      dispatch(changeSlide())
    } ;

  return (
    <Container>
      <Button onClick={handleScroll}>
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
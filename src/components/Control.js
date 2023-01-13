import React from 'react';
import ScrollPicture from './ScrollPicture';
import { Button} from './styles/Contol.styled';

const Control = (props) => {
  return (
    <>
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
    <ScrollPicture id={props.id} />
    </>
  )
}

export default Control
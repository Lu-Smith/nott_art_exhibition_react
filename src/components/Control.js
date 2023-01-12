import React from 'react';
import { Button, Scroll } from './styles/Contol.styled';
import content from '../helpers/imagesList';

const Control = () => {
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
    <Scroll>-{content[0].id}-</Scroll>
    </>
  )
}

export default Control
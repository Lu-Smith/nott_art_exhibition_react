import React from 'react'
import { Button, Scroll } from './styles/Contol.styled'

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
    <Scroll>-1-</Scroll>
    </>
  )
}

export default Control
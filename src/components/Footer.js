import React from 'react'
import { Contact, Container, Logo, Motto } from './styles/Footer.styled';
import LogoImg from '../images/logo.png';

const Footer = () => {
  return (
    <Container>
        <Logo src={LogoImg} alt='Luna Smith Art logo'/>
        <Contact>Contact</Contact>
        <Motto>everything already happened</Motto>
    </Container>
  )
}

export default Footer
import React from 'react';
import { Container, Logo, Motto, Title } from './styles/Header.styled'; 
import LogoImg from '../images/logo.png';

const Header = () => {
  return (
    <Container>
        <Logo src={LogoImg} alt='Luna Smith Art logo'/>
        <Title>Nott</Title>
        <Motto>connect the past, the present and the future</Motto>
    </Container>
  )
}

export default Header
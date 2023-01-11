import React from 'react';
import { Container, Logo, Title } from './styles/Header.styled'; 
import LogoImg from '../images/logo.png';

const Header = () => {
  return (
    <Container>
        <Logo src={LogoImg} alt='Luna Smith Art logo'/>
        <Title>Nott</Title>
    </Container>
  )
}

export default Header
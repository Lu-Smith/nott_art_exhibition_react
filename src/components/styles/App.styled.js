import styled, { keyframes } from 'styled-components';

export const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  20% {
    transform: translateX(-20%);
    opacity: 1;
  }
  70% {
    transform: translateX(-20%);
    opacity: 1;
  }
  85% {
    transform: translateX(100%);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 20%;
  animation: ${slideInFromLeft} 10s ease;
`;



export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `
export const HeaderContainer = styled.div`
   position: fixed;
   top: 0;
   height: 20vh;
   width: 100vw;
`
export const GalleryContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
`
export const FooterContainer = styled.div`
    height: 15vh;
    width: 100vw;
    position: fixed;
    bottom: -70px;
`
  
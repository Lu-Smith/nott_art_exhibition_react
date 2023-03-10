import styled, { keyframes } from 'styled-components';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: black;
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

`
export const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  25% {
    transform: translateX(-50%);
    opacity: 1;
  }
  70% {
    transform: translateX(-50%);
    opacity: 1;
  }
  85% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`

export const ImageContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 80vh;
  top: 11.1vh;
  transform: translate(-50%, -50%);
  animation: ${slideInFromLeft} 13s ease;
  z-index: 2;
`

export const FooterContainer = styled.div`
    height: 15vh;
    width: 100vw;
    position: fixed;
    bottom: -70px;
`
  
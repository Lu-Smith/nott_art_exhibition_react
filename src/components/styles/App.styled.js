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
export const slideRectangle1 = keyframes`
  0% {
    transform: translateX(-200%);
    opacity: 0;
  }
  50% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(400%);
    opacity: 0;
  }
`

export const GalleryContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;

    .rectangle1 {
    width: 300px;
    height: 250px;
    border-radius: 20px;
    border: 2px solid white;
    position: relative;
    top: 150px;
    left: -600px;
    animation: ${slideRectangle1} 13s ease-in-out;
    z-index: 1;
    }

    .rectangle2 {
    width: 250px;
    height: 200px;
    border-radius: 15px;
    border: 1px solid red;
    position: relative;
    top: 300px;
    left: -650px;
    animation: ${slideRectangle1} 13s ease-in-out;
    z-index: 1;
    }

    .rectangle3 {
    width: 400px;
    height: 100px;
    border-radius: 20px;
    border: 1px solid white;
    position: relative;
    top: 400px;
    left: -550px;
    animation: ${slideRectangle1} 13s ease-in-out;
    z-index: 1;
    }
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
  
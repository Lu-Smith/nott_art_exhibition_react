import styled, { keyframes } from 'styled-components';

export const slideRectangle1 = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translateX(525%);
    opacity: 0;
  }
`
export const slideRectangle2 = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  15% {
    transform: translateX(0%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translateX(525%);
    opacity: 0;
  }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;

.rectangle1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 150px;
    height: 60px;
    background: linear-gradient(180deg, rgb(0, 0, 0, 0.5) 20%, rgb(63, 76, 119, 0.5) 60.2%, rgb(0, 0, 0, 0.5) 80%);
    border-bottom: 4px solid rgb(250, 250, 250, 0.5);
    border-top: 4px solid rgb(250, 250, 250, 0.5);
    animation: ${slideRectangle1} 10s ease;
}

.rectangle2 {
    position: absolute;
    left: 0;
    top: 56px;
    width: 150px;
    height: 60px;
    background: linear-gradient(180deg, rgb(0, 0, 0, 0.5) 20%, rgb(63, 76, 119, 0.5) 60.2%, rgb(0, 0, 0, 0.5) 80%);
    border-bottom: 4px solid rgb(250, 250, 250, 0.5);
    border-top: 4px solid rgb(250, 250, 250, 0.5);
    animation: ${slideRectangle2} 10s ease;
    }

.rectangle3 {
    position: absolute;
    left: 0;
    top: 112px;
    width: 150px;
    height: 60px;
    background: linear-gradient(180deg, rgb(0, 0, 0, 0.5) 20%, rgb(63, 76, 119, 0.5) 60.2%, rgb(0, 0, 0, 0.5) 80%);
    border-bottom: 4px solid rgb(250, 250, 250, 0.5);
    border-top: 4px solid rgb(250, 250, 250, 0.5);
    animation: ${slideRectangle1} 10s ease;
    }

.rectangle4 {
    position: absolute;
    left: 0;
    top: 168px;
    width: 150px;
    height: 60px;
    background: linear-gradient(180deg, rgb(0, 0, 0, 0.5) 20%, rgb(63, 76, 119, 0.5) 60.2%, rgb(0, 0, 0, 0.5) 80%);
    border-bottom: 4px solid rgb(250, 250, 250, 0.5);
    border-top: 4px solid rgb(250, 250, 250, 0.5);
    animation: ${slideRectangle2} 10s ease;
}

.rectangle5 {
    position: absolute;
    left: 0;
    top: 224px;
    width: 150px;
    height: 60px;
    background: linear-gradient(180deg, rgb(0, 0, 0, 0.5) 20%, rgb(63, 76, 119, 0.5) 60.2%, rgb(0, 0, 0, 0.5) 80%);
    border-bottom: 4px solid rgb(250, 250, 250, 0.5);
    border-top: 4px solid rgb(250, 250, 250, 0.5);
    animation: ${slideRectangle1} 10s ease;
}
`
export const Image = styled.img`
    width: 280px;
    border-radius: 20px;
    border: 10px solid black;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    z-index: 99;
`
export const Title = styled.h3`
    font-size: 30px;
    margin-top: 20px;
    font-style: italic;
    z-index: 99;
`
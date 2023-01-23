import styled, { keyframes} from 'styled-components';

export const slideStar1 = keyframes`
  0% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(90deg);
  }
  `
  export const slideStar2 = keyframes`
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(150deg);
  }
  `

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-radius: 20px;
    position: relative;

    .description {
        line-height: 30px;
        font-style: italic;
        font-weight: 500;
        font-size: 20px
    }
  
`
export const HalfStar1 = styled.div`
        width: 0;
        height: 0;
        border-right: 10px solid transparent;
        border-bottom: 15px solid White;
        border-left: 10px solid transparent;
        transform: rotate(30deg);
        position: absolute;
        top: 10px;
        left: 10px;
        animation: ${slideStar1} 10s ease;
`

export const HalfStar2 = styled.div`
        width: 0;
        height: 0;
        border-right: 10px solid transparent;
        border-bottom: 15px solid white;
        border-left: 10px solid transparent;
        transform: rotate(90deg);
        position: absolute;
        top: 13px;
        left: 10px;
        animation: ${slideStar2} 10s ease;
`

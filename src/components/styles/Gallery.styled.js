import styled, { keyframes } from 'styled-components';

export const slideRectangle1 = keyframes`
  0% {
    transform: translateX(-180%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translateX(420%);
    opacity: 0;
  }
`
export const slideRectangle2 = keyframes`
  0% {
    transform: translateX(500%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translateX(-200%);
    opacity: 0;
  }
`

export const slideRectangle3 = keyframes`
  0% {
    transform: translateX(-280%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translateX(320%);
    opacity: 0;
  }
`
export const slideRectangle4 = keyframes`
  0% {
    transform: translateX(600%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
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
    width: 250px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle1} 10s ease;
}

.rectangle2 {
    position: absolute;
    left: 0;
    top: 52px;
    width: 300px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle2} 10s ease;
    }

.rectangle3 {
    position: absolute;
    left: 0;
    top: 108px;
    width: 130px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle1} 10s ease;
    }

.rectangle4 {
    position: absolute;
    left: 0;
    top: 164px;
    width: 180px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 0, 0, 0.5);
    animation: ${slideRectangle2} 10s ease;
}

.rectangle5 {
    position: absolute;
    left: 0;
    top: 220px;
    width: 290px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle1} 10s ease;
}

.rectangle6 {
    position: absolute;
    left: 0;
    top: 276px;
    width: 220px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(63, 76, 119, 0.5);
    animation: ${slideRectangle2} 10s ease;
}

.rectangle7 {
    position: absolute;
    left: 0;
    top: 332px;
    width: 80px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(63, 76, 119, 0.5);
    animation: ${slideRectangle1} 10s ease;
    }

.rectangle8 {
    position: absolute;
    left: 0;
    top: 388px;
    width: 150px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(63, 76, 119, 0.5);
    animation: ${slideRectangle2} 10s ease;
    }

.rectangle9 {
    position: absolute;
    left: 0;
    top: 444px;
    width: 250px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(63, 76, 119, 0.5);
    animation: ${slideRectangle1} 10s ease;
}

.rectangle10 {
    position: absolute;
    left: 0;
    top: 502px;
    width: 300px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle2} 10s ease;
}

.rectangle11 {
    position: absolute;
    left: 0;
    top: 556px;
    width: 170px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle1} 10s ease;
}

.rectangle12 {
    position: absolute;
    left: 0;
    top: 612px;
    width: 180px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle2} 10s ease;
}

.rectangle13 {
    position: absolute;
    left: 0;
    top: 668px;
    width: 300px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle1} 10s ease;
}

.rectangle14 {
    position: absolute;
    left: 0;
    top: 724px;
    width: 240px;
    height: 40px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle2} 10s ease;
}

.rectangle15 {
    position: absolute;
    left: 200px;
    top: 0;
    width: 150px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle3} 10s ease;
}

.rectangle16 {
    position: absolute;
    left: 200px;
    top: 52px;
    width: 250px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    border-radius: 15px;
    animation: ${slideRectangle4} 10s ease;
    }

.rectangle17 {
    position: absolute;
    left: 200px;
    top: 108px;
    width: 230px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle3} 10s ease;
    }

.rectangle18 {
    position: absolute;
    left: 200px;
    top: 164px;
    width: 180px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle4} 10s ease;
}

.rectangle19 {
    position: absolute;
    left: 200px;
    top: 220px;
    width: 170px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle3} 10s ease;
}

.rectangle20 {
    position: absolute;
    left: 200px;
    top: 276px;
    width: 300px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(63, 76, 119, 0.5);
    animation: ${slideRectangle4} 10s ease;
}

.rectangle21 {
    position: absolute;
    left: 200px;
    top: 332px;
    width: 200px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle3} 10s ease;
    }

.rectangle22 {
    position: absolute;
    left: 200px;
    top: 388px;
    width: 100px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 250, 250, 0.5);
    animation: ${slideRectangle4} 10s ease;
    }

.rectangle23 {
    position: absolute;
    left: 200px;
    top: 444px;
    width: 150px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(250, 0, 0, 0.5);
    animation: ${slideRectangle3} 10s ease;
}

.rectangle24 {
    position: absolute;
    left: 200px;
    top: 502px;
    width: 200px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgba(63, 76, 119, 0.5);
    animation: ${slideRectangle4} 10s ease;
}

.rectangle25 {
    position: absolute;
    left: 200px;
    top: 556px;
    width: 300px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgb(250, 250, 250, 0.5);
    animation: ${slideRectangle3} 10s ease;
}

.rectangle26 {
    position: absolute;
    left: 200px;
    top: 612px;
    width: 100px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgb(250, 250, 250, 0.5);
    animation: ${slideRectangle4} 10s ease;
}

.rectangle27 {
    position: absolute;
    left: 200px;
    top: 668px;
    width: 200px;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%, rgba(0, 0, 0, 0.5) 80%);
    border: 4px solid rgb(250, 250, 250, 0.5);
    animation: ${slideRectangle3} 10s ease;
}

.rectangle28 {
    position: absolute;
    left: 200px;
    top: 724px;
    width: 300px;
    height: 40px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 20%, rgba(63, 76, 119, 0.5) 60.2%);
    border-top: 4px solid rgb(250, 250, 250, 0.5);
    animation: ${slideRectangle4} 10s ease;
}
`
export const Image = styled.img`
    width: 320px;
    border-radius: 20px;
    border: 8px solid white;
    box-shadow: 3px 3px 10px rgba(250, 250, 250, 0.5);
    z-index: 99;
`
export const Title = styled.h3`
    font-size: 30px;
    margin-top: 20px;
    font-style: italic;
    z-index: 99;
`
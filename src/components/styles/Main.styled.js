import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
border-radius: 20px;
color: white;
position: relative;

.openImage {
    position: absolute;
    z-index: 99;

}
`
export const Title = styled.h2`
font-size: 50px;
margin: 20px 0;
`

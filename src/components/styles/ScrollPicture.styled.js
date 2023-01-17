import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const Page = styled.button`
font-size: 18px;
color: grey;
padding: 2px 8px;
border: none;

&:active, &:hover {
    background-color: blue;
    color: white;
}
`
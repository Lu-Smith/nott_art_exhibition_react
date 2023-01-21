import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-radius: 20px;
    border: 10px solid black;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); 

    div {
        line-height: 30px;
        font-style: italic;
        font-weight: 500;
        font-size: 20px
    }
`

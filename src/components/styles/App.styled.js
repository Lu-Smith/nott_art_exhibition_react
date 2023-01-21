import styled from 'styled-components';

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

    div {
        margin-top: 50px ;
    }
`
export const FooterContainer = styled.div`
    height: 15vh;
    width: 100vw;
    position: fixed;
    bottom: -70px;
`
  
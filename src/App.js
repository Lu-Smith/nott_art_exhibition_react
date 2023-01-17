import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { GalleryContainer, AppContainer, ControlContainer, HeaderContainer, FooterContainer } from './components/styles/App.styled';
import content from './helpers/imagesList';
import { ThemeProvider } from 'styled-components';
import Control from './components/Control';
import ScrollPicture from './components/ScrollPicture';
import { Provider } from 'react-redux';
import { store } from './app/store';

const theme = {
  light: {
    primaryColor: 'white',
    primaryText: 'black',
  },
  dark: {
    primaryColor: 'black',
    primaryText: 'white',
  }
}

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <GalleryContainer>
                {content.map((image) => {
                  return <Main key={image.id} image={image} />
                })}
            </GalleryContainer>
            <ControlContainer>
                <Control />
                <ScrollPicture />
            </ControlContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

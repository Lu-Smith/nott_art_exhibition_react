import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { GalleryContainer, AppContainer } from './components/styles/App.styled';
import content from './helpers/imagesList';
import { ThemeProvider } from 'styled-components';

const theme = {
  dark: {
    primaryColor: 'white',
    primaryText: 'black',
  },
  light: {
    primaryColor: 'black',
    primaryText: 'white',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <GalleryContainer>
            {content.map((image) => {
              return <Main key={image.id} image={image} />
            })}
        </GalleryContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

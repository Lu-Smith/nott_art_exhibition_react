import React, {useState, useEffect} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { GalleryContainer, AppContainer, HeaderContainer, FooterContainer, ImageContainer } from './components/styles/App.styled';
import content from './helpers/imagesList';
import { ThemeProvider } from 'styled-components';

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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % content.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);


  return (
      <ThemeProvider theme={theme}>
        <AppContainer>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <GalleryContainer>
                {content.map((image, index) => {
                  return (
                    <ImageContainer key={index} style={{ display: index === currentIndex ? "block" : "none" }}>
                        <Main image={image} />
                    </ImageContainer>
                  )
                })}
            </GalleryContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </AppContainer>
      </ThemeProvider>
  );
}

export default App;

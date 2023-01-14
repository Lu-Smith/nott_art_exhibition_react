import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { GalleryContainer, AppContainer } from './components/styles/App.styled';
import content from './helpers/imagesList';

function App() {
  return (
    <AppContainer>
       <Header />
       <GalleryContainer>
          {content.map((image) => {
            return <Main key={image.id} image={image} />
          })}
      </GalleryContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;

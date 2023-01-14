import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { GalleryContainer, App } from './components/styles/App.styled';
import content from './helpers/imagesList';

function App() {
  return (
    <App>
       <Header />
       <GalleryContainer>
          {content.map((image) => {
            return <Main key={image.id} image={image} />
          })}
      </GalleryContainer>
      <Footer />
    </App>
  );
}

export default App;

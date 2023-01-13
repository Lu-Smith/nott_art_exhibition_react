import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import content from './helpers/imagesList';

function App() {
  return (
    <div className="App">
       <Header />
       {content.map((image) => {
        return <Main key={image.id} image={image} />
       })}
       <Footer />
    </div>
  );
}

export default App;

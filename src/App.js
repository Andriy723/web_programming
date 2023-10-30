import './App.css';
import Header from './components/Header/header.js';
import './components/Header/header.css';
import MainPart from './components/MainPart/main_part'
import './components/MainPart/main_part.css';
import PhotosPart from './components/PhotosPart/photos_part'
import './components/PhotosPart/photos_part.css';
import Bottom from './components/Bottom/bottom'
import './components/Bottom/bottom.css';
import Footer from './components/Footer/footer'
import './components/Footer/footer.css';

function App() {
  return (
      <div>
        <Header/>
        <MainPart/>
        <PhotosPart/>
        <Bottom/>
        <Footer/>
      </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import MyCarousel from './components/MyCarousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
let url="http://www.omdbapi.com/?i=tt3896198&apikey=769155e5&s=";
let film1="The Lord Of the Rings";
let film2="Marvel";
let film3="Sherlock Holmes";

function App() {
  return (
    <div className="App bg-dark text-white" >
   
    <NavBar />
    <Hero />
    <MyCarousel url={url} nameTitle={film1} title="Trending Now"/>
    <MyCarousel url={url} nameTitle={film2} title="Watch it Again"/>
    <MyCarousel url={url} nameTitle={film3} title="New Releases"/>
    <Footer />
    </div>
  );
}

export default App;

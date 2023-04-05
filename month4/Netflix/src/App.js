import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import MyCarousel from './components/MyCarousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import TVShows from './components/TVShows';
import MovieDetails from './components/MovieDetails';
import SingleMovies from './components/SingleMovie';
let url="http://www.omdbapi.com/?i=tt3896198&apikey=769155e5&s=";
let film1="Harry Potter";
let film2="Marvel";
let film3="Sherlock Holmes";


function App() {

  const [comments, setComments] = useState([]);
  

  return (
<BrowserRouter>
    <div className="App bg-dark text-white" >
   
    <NavBar />

<Routes>

  <Route path='/home' element={
  <>
  <Hero />
    <MyCarousel url={url} nameTitle={film1} title="Trending Now"/>
    <MyCarousel url={url} nameTitle={film2} title="Watch it Again"/>
    <MyCarousel url={url} nameTitle={film3} title="New Releases"/>
    </>
  }
  />


  <Route path='/TV' element={ <TVShows />} />
  
  <Route path="/movie-details/:imdbID" element={<MovieDetails changeMovie={setComments} />} />

  <Route path="/movie-details/comments/:imdbID" element={
    <div className='d-colum'>
<MovieDetails  changeMovie={setComments} />
<SingleMovies comments={comments} />
</div>
  }

  ></Route>


</Routes>
    <Footer />
    </div>

</BrowserRouter>
  );
}

export default App;

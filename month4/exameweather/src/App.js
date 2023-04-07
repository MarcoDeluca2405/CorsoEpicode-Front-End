
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MainHome from './components/MainHome';
import MeteoLocation from './components/MeteoLocation';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <MyNavbar />

      <Routes>

      <Route path='/' element={<MainHome />} />
      <Route path='/Meteo' element={
        <>
        <MainHome />
        <div className='myMeteo'>

        <MeteoLocation />

        </div>

        </>
      } />


      </Routes>

      <MyFooter />
    </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import MyNavBar from './Components/MyNavBar';
import { Container, Row } from 'react-bootstrap';
import MainPage from './Components/MainPage';
import NavBarFlex from './Components/NavBarFlex';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumPage from './Components/AlbumPage';
import ArtistPage from './Components/ArtistPage';

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
    <div className="App">
      <Container fluid>
      <Row>

      <MyNavBar />
<Routes>

  <Route path="/" element={<MainPage /> } />
  <Route path="/Album" element={<AlbumPage />} />
  <Route path="/Artist" element={<ArtistPage />} />

</Routes>

      <NavBarFlex />

      </Row>
      </Container>
    </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;

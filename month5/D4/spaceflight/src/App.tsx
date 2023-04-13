import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNavBar from "./Components/MyNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHome from "./Components/MainHome";
import Article from "./Components/Article";


function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <MyNavBar />
      <Routes>

      <Route path="/" element={<MainHome />} />
      <Route path="/article/:id" element={<Article />} />
      </Routes>
      

    </div>
      </BrowserRouter>
  );
}

export default App;

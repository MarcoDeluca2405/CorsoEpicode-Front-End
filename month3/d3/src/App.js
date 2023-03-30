import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MynewNav from './components/MynewNav';
import MyFooter from './components/MyFooter';
import Book from './books/fantasy.json';
import BookList from './components/BookList';




function App() {
  return (
    <div className="App">  
    <MynewNav />
   
    
   <BookList libri={Book}/>

   <MyFooter />
    </div>
  );
}

export default App;

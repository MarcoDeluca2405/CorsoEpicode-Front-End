import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MynewNav from './components/MynewNav';
import MyFooter from './components/MyFooter';
import SingleBook from './components/SingleBook';
import Book from './books/fantasy.json';
import BookList from './components/BookList';




function App() {
  return (
    <div className="App">  
    <MynewNav />
   
    <SingleBook img={Book[0].img} title={Book[0].title} category={Book[0].category} price={Book[0].price} />
    
   <BookList />

   <MyFooter />
    </div>
  );
}

export default App;

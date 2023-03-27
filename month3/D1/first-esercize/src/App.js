
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <ImageComponent url="https://ecointernazionale.com/wp-content/uploads/2020/06/world-environment-day.jpg" info="Natura"></ImageComponent>
        <ButtonComponent testo="Premi" />
      </header>
    </div>
  );
}

export default App;

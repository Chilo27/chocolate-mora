import './App.css';
import Navbar from './components/navbar';
import itemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <itemListContainer greeting="Hola"/>
    </div>
  );
}

export default App;

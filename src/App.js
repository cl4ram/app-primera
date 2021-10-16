import './App.css';
import { NavBar } from './components/navBar/navBar';
import {ItemListContainer} from './containers/itemListContainer'


function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola a todos"/>
    </div>
  );
}

export default App;

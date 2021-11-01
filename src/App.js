import './App.css';
import { NavBar } from './components/navBar/navBar';
import {ItemListContainer} from './containers/itemListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <ItemListContainer greeting="Productos"/>

      <Switch>
        <Route exact path="/products">
        </Route>
        <Route exact path="/holis">
          <h1>Holis</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

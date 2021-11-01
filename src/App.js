import './App.css';
import { NavBar } from './components/navBar/navBar';
import {ItemListContainer} from './containers/itemListContainer';
import {ItemDetailContainer} from './containers/itemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <ItemListContainer greeting="Productos"/>
      <ItemDetailContainer/>

      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting="Productos"/>
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer greeting="Productos"/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

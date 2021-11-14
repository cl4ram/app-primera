import './App.css';
import { NavBar } from './components/navBar/navBar';
import {ItemListContainer} from './containers/itemListContainer';
import {ItemDetailContainer} from './containers/itemDetailContainer';
import { CartContainer } from './containers/cartContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartState } from './context/cartContext'

function App() {

  return (
    <CartState>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Productos"/>
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer greeting="Productos"/>
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
            <CartContainer/>
          </Route>
          <Route exact path="*">
          <h1>Lo sentimos, parece que el sitio que estás buscando está teniendo algún problema. Te pedimos disculpas por los inconvenientes</h1>

          </Route>
        </Switch>
      </BrowserRouter>
    </CartState>
  );
}

export default App;

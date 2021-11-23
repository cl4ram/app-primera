import './App.css';
import { NavBar } from './components/navBar/navBar';
import {ItemListContainer} from './containers/itemListContainer';
import {ItemDetailContainer} from './containers/itemDetailContainer';
import { Cart } from './components/cart/cart';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartState } from './context/cartContext'
import {Form} from './components/form/form'

function App() {

  return (
    <CartState>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Productos"/>
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer greeting="Productos"/>
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/form">
            <Form/>
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

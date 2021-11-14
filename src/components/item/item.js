import { Link } from "react-router-dom";
import "./item.css"
import {useContext} from 'react'
import {CartContext} from '../../context/cartContext'

export const Item = ({ item }) => {

    const {addItem , updateItemsInCart} = useContext(CartContext)

    const handleClick =() => {
        addItem(item, 1);
        updateItemsInCart(item, -1)
    }

    return (
        <div className="card">
            <img src={item.photo} alt="imagen de producto" className="card-imagen"/>
            <div className="card-data">
                <h1 className="card-data-titulo">{item.name}</h1>
                <span className="card-data-precio">${item.price}</span>
                <div onClick={handleClick}>carrito</div>
            </div>
                <Link to={`/item/${item.id}`}>
                    <button className="card-detalle"> Ver detalles </button>
                </Link>
        </div>
    );
}
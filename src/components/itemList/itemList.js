import {Item} from "../item/item"
import "./itemList.css"

export const ItemList = ({ product }) => {
    return (
        <div className="card">
            <img src={product.photo} alt="" className="card-imagen"/>
            <div className="card-data">
                <h1 className="card-data-titulo">{product.name}</h1>
                <span className="card-data-precio">${product.price}</span>
            </div>
            <Item/>
            <button className="card-carrito">Agregar al carrito</button> 
        </div>
    )
}
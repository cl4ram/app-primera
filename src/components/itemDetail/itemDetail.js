import "./itemDetail.css";
import { ItemCount } from "../itemCount/itemCount"
import { GoToCart } from "../goToCart/goToCart"
import { useState, useContext } from "react";
import { CartContext } from "../../context/cart/cartContext";


export const ItemDetail = ({item}) => {

    const { addToCart , showHideCart, showCart} = useContext(CartContext)
    const [counterCart, setCounterCart] = useState(0)

    const onAdd = (counter) => {
        showHideCart(false);
        setCounterCart(counter)
        addToCart(item , counter)
    }

    return (
        <>
            <div >
                {item ?
                <div className="detail">
                    <div className="detail-foto">
                        <img src={item.photo} alt="imagen de producto" className="detail-foto-img"/>
                    </div>
                    <div className="detail-datos">
                        <h1 className="detail-datos-titulo">{item.name}</h1>                        
                        <span className="detail-datos-precio">$ {item.price}</span>
                        <p className="detail-datos-parrafo">{item.detail}</p>
                        <span>Quedan {item.stock} productos disponibles</span>
                    </div>
                    {!showCart ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> : <GoToCart quantity={counterCart}></GoToCart>}
                </div> 
                : 'Cargando...'}
            </div>
        </>
    )
}
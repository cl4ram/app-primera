import "./itemDetail.css";
import { ItemCount } from "../itemCount/itemCount"
import { GoToCart } from "../goToCart/goToCart"
import { useState } from "react";


export const ItemDetail = ({item}) => {

    const [visibility, setVisibility] = useState(true);
    const [counterCart, setCounterCart] = useState(0)

    const onAdd = (counter) => {
        setVisibility(false);
        setCounterCart(counter)
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
                    {visibility ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> : <GoToCart quantity={counterCart}></GoToCart>}
                </div> 
                : 'Cargando...'}
            </div>
        </>
    )
}
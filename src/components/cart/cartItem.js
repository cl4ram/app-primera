import { ItemCount } from "../itemCount/itemCount"
import { useContext} from "react"
import { CartContext } from "../../context/cartContext"
import React, {useState} from "react"

export const CartItem = ({item , onRefresh}) => {
    const {removeItem} = useContext(CartContext);
    const [itemTotal, setItemTotal] = useState(item.total)

    const onAddHandle = (counter , itemTotal) => {
        if (counter > 0) {
            item.total = item.price * counter
            setItemTotal(item.total)
            onRefresh(itemTotal)
        } else if (counter === 0) {
            removeItem(item.id)
        }
    }
    console.log(itemTotal)

    return (
        <>
        <div>
            <img src={item.photo} alt="foto de producto"/>
            <h1>{item.name}</h1>
            <p>${item.price}</p>
            <ItemCount initial={item.quantity} stock={item.stock} id={item.id} onAdd={onAddHandle} />
            <p>Total: $ {itemTotal}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
        </div>
        </>
    )
}

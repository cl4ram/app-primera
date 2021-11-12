import { ItemCount } from "../itemCount/itemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/cart/cartContext"

export const CartItem = ({item , onRefresh}) => {
    const {removeItem} = useContext(CartContext);
    const [totalItem, setTotalItem] = useState(item.total)

    const onAddHandle = (counter , totalItem) => {
        if (counter > 0) {
            item.total = item.precio * counter
            setTotalItem(item.total)
            onRefresh(totalItem)
        } else if (counter === 0) {
            removeItem(item.id)
        }
    }

    return (
        <>
        <div>
            <img src={item.photo} alt="foto de producto"/>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <ItemCount initial={item.quantity} stock={item.stock} id={item.id} onAdd={onAddHandle} />
            <p>Total: $ {totalItem}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
        </div>
        </>
    )
}

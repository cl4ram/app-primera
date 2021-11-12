import {Item} from "../item/item"
import "./itemList.css"
import { useContext } from "react"
import { CartContext } from "../../context/cart/cartContext"
import { ItemCount } from "../itemCount/itemCount"

export const ItemList = ({ product }) => {

    const {addToCart , showHideCart} = useContext(CartContext)

    const onAddHandle = (counter , e) =>{
        if (counter > 0) {
            showHideCart(false)
            addToCart(product, counter)
        }
    }

    return (
        <div className="item-list">
            {product.length ? product.map((product) => (
                    <div>
                        <Item product={product} key={product.id}/>
                        <ItemCount stock={product.stock} initial={1} onAdd={onAddHandle}/>
                    </div>
                ))
            : 'Cargando productos...'}
        </div>
    )
}
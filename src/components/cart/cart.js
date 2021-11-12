import { useContext , useState } from "react"
import { CartItem } from "./cartItem"
import { CartContext } from "../../context/cart/cartContext"
import { NavLink } from "react-router-dom"

export const Cart = () => {

const {cartItems, initialState} = useContext(CartContext);
const [total, setTotal] = useState(cartItems.reduce((amount , item) => item.total + amount, 0))

    return(
        <>
        {cartItems.length !== 0 ? ( 
            <div>
                {cartItems.map((item) => (<CartItem key={item.id} item={item} onRefresh={() => setTotal(cartItems.reduce((amount , item) => item.total + amount , 0))}/>))}
                <p>Total:</p>
                <h1>${total}</h1>
                <button>Finalizar compra</button>
                <button onClick={()=>initialState}>Vaciar Carrito</button>
                <NavLink to={'/'}><button>Seguir comprando</button></NavLink>
            </div>
            ): (
                <div>
                    <h1>Agrega productos al carrito para iniciar tu compra</h1>
                    <NavLink to={'/'}><button>Ir a la tienda</button></NavLink>
                </div>
            )}
            
        </>
    )
}
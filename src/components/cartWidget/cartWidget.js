import carritoIcono from './carrito.svg'
// import { CartContext } from '../../context/cart/cartContext'
// import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

export const CartWidget = () => {

    // const {cartItems , showCart } = useContext(CartContext)
    // const totalItems = cartItems.reduce(function (a,b) {return a + b.quantity} , 0) 

    return (
        <div>
            <NavLink to='/cart'>
                    <img src={carritoIcono} className="carrito" alt="carrito">
                        {/* {showCart && totalItems >0 ? (<span>{totalItems}</span>): null} */}
                    </img>
            </NavLink>
        </div>
    )
}

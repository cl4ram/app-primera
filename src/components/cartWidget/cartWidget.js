import carritoIcono from './carrito.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export const CartWidget = () => {

    const {cart} = useContext(CartContext);
    const totalItems = cart.reduce((total, item) => total + item.counter, 0)

    return (
        <div>
            <img src={carritoIcono} className="carrito" alt="carrito"></img>
            {totalItems !== 0 && (
                <sup>{totalItems}</sup>
            )}
        </div>
    )
}

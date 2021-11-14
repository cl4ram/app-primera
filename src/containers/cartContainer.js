import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext'
import { ItemCount } from '../components/itemCount/itemCount'

export function CartContainer() {
    const {cart , removeItem , emptyCart} = useContext(CartContext);

    const totalToPay = cart.reduce ((total , item) => {
        return total + item.price * item.counter
    }, 0 );

    return (
        <>
        {cart.length ? (
            cart.map((item) => (
                <div key={item.id}>
                    <img src={item.photo} alt='Foto del producto'/>
                    <h2>{item.name}</h2>
                    <ItemCount
                    stock={item.stock}
                    initial={item.counter}
                    item={item}
                    showBtn={false}
                    />
                    <span>${item.price}</span>

                    <div onClick={() => removeItem(item.id)}>
                        x
                    </div>
                </div>
            ))
        ) : (
            <h1>Para comenzar a comprar agregá productos a tu carrito</h1>
        )}
        {cart.length ? (
            <>
                <h1>Total: {totalToPay}</h1>
                <button onClick={() => emptyCart()}>
                    Vaciar carrito
                </button>
            </>
        ): (
            <Link to='/'>
                <button>Seguir comprando</button>
            </Link>
        )}
        </>
    )
}
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext'
import { ItemCount } from '../itemCount/itemCount'
import { Form } from '../form/form';

export function Cart() {

    const [show, setShow] = useState(false)
    const {cart , removeItem , emptyCart} = useContext(CartContext);

    const total = cart.reduce ((total , item) => {
        return total + item.price * item.counter
    }, 0 );

    return (
        <>
        <h1>Mi carrito</h1>
        {cart.length ? (
            cart.map((item) => (
                <div key={item.id}>
                    <img src={item.photo} alt='Foto del producto'/>
                    <h2>{item.name}</h2>
                    <p>Agregaste {item.counter} productos</p>
                    <ItemCount
                    item={item} initial={item.counter} visibility={false} />
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
                <h1>Total: $ {total}</h1>
                <button onClick={() => emptyCart()}>
                    Vaciar carrito
                </button>
                <Link to='/'>
                    <button>Seguir comprando</button>
                </Link>
                <button onClick={() => setShow(true)}>Terminar compra</button>
                <Form show={show} total={total} items={cart} Clean={emptyCart} close={() => setShow(false)}/>

            </>
        ): (
            <Link to='/'>
                <button>Ir a la tienda</button>
            </Link>
        )}
        </>
    )
}
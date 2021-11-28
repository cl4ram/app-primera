import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext'
import { Form } from '../form/form';
import './cart.css'

export function Cart() {

    const [show, setShow] = useState(false)
    const {cart , removeItem , emptyCart} = useContext(CartContext);

    const total = cart.reduce ((total , item) => {
        return total + item.price * item.counter
    }, 0 );

    return (
        <div className="cart-container">
            <h1 className="titulo">Mi carrito</h1>
            {cart.length ? (
                cart.map((item) => (
                    <div key={item.id} className="product-container">
                        <img src={item.photo} alt='Foto del producto' className="product-image"/>
                        <h2>{item.name}</h2>
                        <p>{item.counter} unidades</p>
                        <span>${item.price}</span>

                        <button onClick={() => removeItem(item.id)} className="eliminar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        </button>
                    </div>
                ))
            ) : (
                <h2 className="titulo">Para comenzar a comprar agregá productos a tu carrito</h2>
            )}
            {cart.length ? (
                <div>
                    <div className="total-container">
                        <h3 className="total">Total: $ {total}</h3>
                    </div>
                    <div className="buttons-container-cart">
                        <button onClick={() => emptyCart()} className="button-after">
                            Vaciar carrito
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart svg" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>
                        <Link to='/' style={{ textDecoration: 'none' , color: '#F2F2F2'}}>
                            <button className="button-after">
                                Seguir comprando
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-plus svg" viewBox="0 0 16 16">
                                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>                          
                            </button>
                        </Link>
                        <button onClick={() => setShow(true)} className="button-after">
                            Terminar compra
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-check svg" viewBox="0 0 16 16">
                                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </button>
                    </div>
                    <Form show={show} total={total} items={cart} Clean={emptyCart} close={() => setShow(false)}/>

                </div>
            ): (
                <Link to='/' style={{ textDecoration: 'none'}}>
                    <div className="titulo">
                        <button className="button-after">Ir a la tienda</button>
                    </div>
                </Link>
            )}
        </div>
    )
}
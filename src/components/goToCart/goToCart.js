import { NavLink } from "react-router-dom"
import "./goToCart.css"

export const GoToCart = (props) => {

    return (
        <div className="btns">
        <h2>Se agregaron {props.quantity} productos al carrito</h2>

        <button className="agregar-carrito">
            <NavLink to='/cart'> Ver carrito </NavLink>
        </button>

        <button className="inicio">
            <NavLink to='/'>Volver al inicio</NavLink>

            </button>
        </div>
    )
}
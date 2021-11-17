import {Item} from "../item/item"
import "./itemList.css"
import { NavLink } from "react-router-dom";

export const ItemList = ({ product }) => {

    return (
        <>
            <NavLink key="todo" exact to={`/`}>Todo</NavLink>

            <NavLink key='rollos' exact to={`/category/rollos`}>
                <p>Rollos de etiquetas</p>
            </NavLink>

            <NavLink key='otros' exact to={`/category/papel`}>
                <p>Rollos fiscales</p>
            </NavLink>


            <div className="item-list">
                {product.length ? product.map((product) => (
                        <div>
                            <Item item={product} key={product.id} tipo={product.category}/>
                        </div>
                    ))
                : 'Cargando productos...'}
            </div>
        </>
    )
}
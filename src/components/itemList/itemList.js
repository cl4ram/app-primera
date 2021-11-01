import {Item} from "../item/item"
import "./itemList.css"

export const ItemList = ({ product }) => {
    return (
        <div className="item-list">
            {product.length ? product.map((product) => (
                    <Item product={product} key={product.id}/>
                ))
            : 'Cargando...'}
        </div>
    )
}
import {Item} from "../item/item"
import "./itemList.css"

export const ItemList = ({ product }) => {

    return (
        <div className="item-list">
            {product.length ? product.map((product) => (
                    <div>
                        <Item product={product} key={product.id}/>
                    </div>
                ))
            : 'Cargando productos...'}
        </div>
    )
}
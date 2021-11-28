import {Item} from "../item/item"
import "./itemList.css"

export const ItemList = ({ product }) => {

    return (
            <div className="item-list">
                {product.length ? product.map((product) => (
                        <div key={product.id}>
                            <Item  item={product} tipo={product.category}/>
                        </div>
                    ))
                : 
                <div className="ring-container">
                    <div className="lds-dual-ring"></div>
                </div>
                }
            </div>
    )
}
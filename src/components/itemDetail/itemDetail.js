import "./itemDetail.css";
import { ItemCount } from "../itemCount/itemCount"

export const ItemDetail = ({product}) => {

    return (
        <>
            <div>
				<img src={product.photo} alt='foto del producto'/>
			</div>
			<div>
				<h1>{product.name}</h1>
				<span>{product.price}</span>
				<p>{product.detail}</p>
			</div>
			<div>
				<ItemCount stock={product.stock} initial={1} onAdd={product.onAdd}/>
			</div>
        </>
    
    )
}
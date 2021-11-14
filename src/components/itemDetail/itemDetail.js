import "./itemDetail.css";
import { ItemCount } from "../itemCount/itemCount"
import { Link } from "react-router-dom";

export const ItemDetail = ({item, onAdd, showCount, itemsInCart}) => {

    return (
        <>
            <div>
				<img src={item.photo} alt='foto del producto'/>
			</div>
			<div>
				<h1>{item.name}</h1>
				<span>{item.price}</span>
				<p>{item.detail}</p>
			</div>
			{item.stock > 0 ? (
				!showCount ? (
					<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
				) : (
					<div>
						<p>Agregaste {itemsInCart} </p>
						<Link to='/cart'><button>Ver carrito</button></Link>
						<Link to='/'><button>Seguir comprando</button></Link>
					</div>
				)
			): (
				<h1>No hay más stock disponible para este producto</h1>
			)}
			<div>
			</div>
        </>
    
    )
}
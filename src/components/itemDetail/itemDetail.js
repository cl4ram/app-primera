import "./itemDetail.css";
import { ItemCount } from "../itemCount/itemCount"
import { Link } from "react-router-dom";

export const ItemDetail = ({item, onAdd, showCount, itemsInCart}) => {

    return (
			<div className="detail-container">
				<div className="detail-photo">
					<img src={item.photo} alt='foto del producto' className="detail-photo-img"/>
				</div>
				<div className="detail-data">
					<h1 className="detail-data-title">{item.name}</h1>
					<span className="detail-data-price">${item.price}</span>
					<p className="detail-data-detail">{item.detail}</p>
				</div>
				<div className="counter">
					{item.stock > 0 ? (
						!showCount ? (
							<ItemCount item={item} initial={1} onAdd={onAdd}/>
						) : (
							<div>
								<p>Agregaste {itemsInCart} productos al carrito</p>
								<div className="buttons-container">
									<Link to='/cart' style={{ textDecoration: 'none' }}><button className="button-after">Ver carrito</button></Link>
									<Link to='/' style={{ textDecoration: 'none' }}><button className="button-after">Seguir comprando</button></Link>
								</div>
							</div>
						)
					): (
						<h1>No hay más stock disponible para este producto</h1>
					)}
			</div>
			</div>
    )
}
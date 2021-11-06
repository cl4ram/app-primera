import "./itemDetail.css";
import { ItemCount } from "../itemCount/itemCount"

export const ItemDetail = ({item}) => {
    return (
        <>
            <div >
                {item ?
                <div className="detail">
                    <div className="detail-foto">
                        <img src={item.photo} alt="imagen de producto" className="detail-foto-img"/>
                    </div>
                    <div className="detail-datos">
                        <h1 className="detail-datos-titulo">{item.name}</h1>                        
                        <span className="detail-datos-precio">$ {item.price}</span>
                        <p className="detail-datos-parrafo">{item.detail}</p>
                        <span>Quedan {item.stock} productos disponibles</span>
                    </div>
                    <button className="detail-carrito">Agregar al carrito</button> 
                    <ItemCount 
                        stock={item.stock} 
                        initial={1}
                     />
                </div> 
                : 'Cargando...'}
            </div>
        </>
    )
}
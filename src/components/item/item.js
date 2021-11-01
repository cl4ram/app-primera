export const Item = ({ product }) => {
    return (
        <div className="card">
            <div>
              <img src={product.photo} alt="imagen de producto" className="card-imagen"/>
            </div>
            <div className="card-data">
                <h1 className="card-data-titulo">{product.name}</h1>
                <span className="card-data-precio">${product.price}</span>
            </div>
            <button className="card-carrito">Agregar al carrito</button> 
            <button className="card-detalle">Ver detalles</button>
        </div>
    );
}
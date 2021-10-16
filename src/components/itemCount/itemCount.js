import './itemCount.css'

export const ItemCount = (props) => {
    
    return (
        <div className="containerContador">
            <div className="contador">
                <button onClick={props.onRemove}>-</button>
                <h1 className="cantidad">{props.initial}</h1>
                <button onClick={props.onAdd}>+</button>
            </div>
        </div>
    )

}

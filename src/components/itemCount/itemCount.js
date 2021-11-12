// import './itemCount.css'
import React, {useState } from "react";


export const ItemCount = (props, ID) => {

    const [counter, setCounter] = useState(props.initial);

    const suma = (e) => {
      e.preventDefault();
      if (counter < props.stock) {
        setCounter(counter + 1)
      } else {
            alert("Lo sentimos, solo tenemos " + props.stock + " productos disponibles de este item"  )
      }
    }
    
    const resta = (e) => {
      e.preventDefault();
        if (counter >= props.initial){
          setCounter(counter - 1) 
        } else{
            alert("No podes incluir menos de un producto al carrito")
        }
    }

    const handleClick = (e) => {
      e.preventDefault();
      if (counter !== 0) {
        props.onAdd(counter)
      }
    }
    

    return (
        <div className="containerContador">
            <div className="contador">
                <button onClick={resta}>-</button>
                <span> {counter} </span>
                <button onClick={suma}>+</button>
                <button id={ID} onClick={(e) => {handleClick(e)}}> Agegar al carrito </button>
            </div>
        </div>
    )

}

import './itemCount.css'
import {useState} from "react";


export const ItemCount = (props) => {

    const [counter, setCounter] = useState(1);

    const suma = () => {
      if (counter < props.stock) {
        setCounter(counter + 1)
      } else {
            alert("Lo sentimos, solo tenemos " + props.stock + " productos disponibles de este item"  )
      }
    }
    
    const resta = () => {
        if (counter >= 1){
          setCounter(counter - 1) 
        } else{
            alert("No podes incluir menos de un producto al carrito")
        }
    }
    
    return (
        <div className="containerContador">
            <div className="contador">
                <button onClick={resta}>-</button>
                <span> {counter} </span>
                <button onClick={suma}>+</button>
            </div>
        </div>
    )

}

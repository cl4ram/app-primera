import {useState} from "react"
import { ItemCount } from "../components/itemCount/itemCount";

export function ItemListContainer (props) {

    const [counter, setCounter] = useState(1);

    const stock = 5

    const suma = () => {
      if (counter >= stock) {
        alert("Lo sentimos, no tenemos mas de " + stock + " productos disponibles de este item")
      } else {
        setCounter(counter + 1)
      }}
      const resta = () => {
        if (counter > 1){
          setCounter(counter - 1) 
        } else {
          alert("No podes agregar menos de un producto al carrito")

        }
      }

    return (
        <div>
            <h2>{props.greeting}</h2>
            <ItemCount 
                stock={stock} 
                initial={counter}
                onAdd={suma}
                onRemove={resta}
            />
        </div>
    )
}


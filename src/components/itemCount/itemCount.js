import  {useState , useContext} from "react";
import {CartContext} from '../../context/cartContext'
import './itemCount.css'

export function ItemCount({initial , item , onAdd =null , visibility = true}) {

    const [count, setCount] = useState(initial);
    const { addItem} = useContext(CartContext)


    const suma = () => {
      if (count < item.stock) {
        setCount(count + 1)
      } if (!visibility){
        addItem(item, 1)
      }
    }
    
    const resta = () => {
        if (count >= 1){
          setCount(count - 1);
          } if (!visibility){
            addItem(item, -1)
          }
        } 


    const handleClick = () => {
      onAdd(count)
      addItem(item, count)
    }


      return (
          <div className="containerContador">
              <div className="contador">
                  <button onClick={resta} className="contador-control">-</button>
                  <span> {count} </span>
                  <button onClick={suma} className="contador-control">+</button>
              </div>
              {visibility && (
                <div className="button-container">
                  <button onClick={handleClick} className="button">Agregar al carrito</button>
                </div>
              )}
          </div>
      )

  }

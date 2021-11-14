import  {useState , useContext} from "react";
import {CartContext} from '../../context/cartContext'


export function ItemCount({initial , item , onAdd =null , visibility = true}) {

    const [count, setCount] = useState(initial);
    const { addItem , updateItemInCart} = useContext(CartContext)


    const suma = () => {
      if (count < item.stock) {
        setCount(count + 1)
      } if (!visibility){
        addItem(item, 1)
        updateItemInCart(item, -1)
      }
    }
    
    const resta = () => {
        if (count >= 1){
          setCount(count - 1);
          } if (!visibility){
            addItem(item, -1)
            updateItemInCart(item, 1)
          }
        } 


    const handleClick = () => {
      onAdd(count)
      addItem(item, count)
    }


      return (
          <div className="containerContador">
              <div className="contador">
                  <button onClick={resta}>-</button>
                  <span> {count} </span>
                  <button onClick={suma}>+</button>
              </div>
              {visibility && (
                <button onClick={handleClick}>Agregar al carrito</button>
              )}
          </div>
      )

  }

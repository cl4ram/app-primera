import  {useState , useContext} from "react";
import {CartContext} from '../../context/cartContext'


export function ItemCount({item , onAdd =null , showBtn = true}) {

    const [count, setCount] = useState(1);
    const { addItem , updateItemInCart} = useContext(CartContext)


    const suma = () => {
      if (count < item.stock) {
        setCount(count + 1)
      } if (!showBtn){
        addItem(item, 1)
        updateItemInCart(item, -1)
      }
    }
    
    const resta = () => {
        if (count >= 1){
          setCount(count - 1);
          } if (!showBtn){
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
              {showBtn && (
                <button onClick={handleClick}>Agregar al carrito</button>
              )}
          </div>
      )

  }

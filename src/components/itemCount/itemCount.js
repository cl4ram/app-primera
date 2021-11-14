import  {useState } from "react";


export const ItemCount = (stock , initial) => {

    const [count, setCount] = useState(initial);


    const suma = (e) => {
      if (count < stock) {
        setCount(count + 1)
      }
    }
    
    const resta = (e) => {
        if (count >= 1){
          setCount(count - 1);
          }
        } 


  const onAdd = () => {
    <div>
      <h1>Agregaste {count} productos al carrito</h1>
      <button>Volver al sitio</button>
      <button>Ver carrito</button>
    </div>
  }


      return (
          <div className="containerContador">
              <div className="contador">
                  <button onClick={resta}>-</button>
                  <span> {count} </span>
                  <button onClick={suma}>+</button>
              </div>
              <div>
                <button onClick={onAdd}>Agregar al carrito</button>
              </div>
          </div>
      )

  }

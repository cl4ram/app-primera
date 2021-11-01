import {useEffect, useState} from "react";
import { ItemCount } from "../components/itemCount/itemCount";
import Products from "../products.json";
import {ItemList} from "../components/itemList/itemList"

export function ItemListContainer (props) {

    const [productos, setProductos] = useState([]);

    const getInfo = (info) => 
      new Promise((resolve, reject) => {
        setTimeout(() =>{
          if (info) {
            resolve(info);
          }else {
            reject("Por favor, intentá nuevamente en unos segundos");
          }
        }, 3000);
      });

      useEffect(() => {
        getInfo(Products)
        .then((res) => setProductos(res))
        .catch((err) => console.log(err));
      }, []);

    const [counter, setCounter] = useState(1);

    const stock = 8

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
            <ItemList product={productos}/>
            <ItemCount 
                stock={stock} 
                initial={counter}
                onAdd={suma}
                onRemove={resta}
            />
          </div>
    )
}


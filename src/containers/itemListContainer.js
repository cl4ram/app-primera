import {useEffect, useState} from "react";
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

    return (
        <div>
            <h2>{props.greeting}</h2>
            <ItemList product={productos}/>
          </div>
    )
}


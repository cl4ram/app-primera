import {useEffect, useState} from "react";
import Products from "../products.json";
import {ItemDetail} from "../components/itemDetail/itemDetail";
import { useParams } from "react-router";

export function ItemDetailContainer () {

    const [item, setItem] = useState(null);

    const { itemId } = useParams();

    const getInfo = (info) => 
    new Promise((resolve, reject) => {
      setTimeout(() =>{
        if (info) {
          resolve(info);
        }else {
          reject("Por favor, intentá nuevamente en unos segundos");
        }
      }, 2000);
    });

    useEffect(() => {
        getInfo(Products)
        .then((res) =>  { itemId ? setItem(res.find((item) => item.id === itemId)) : setItem(Products)})
        .catch((err) => console.log(err));
      }, [itemId]);

      console.log(itemId)
     
    return (

        <>
        {item ? <ItemDetail item={item}/> : (<h1>Cargando...</h1>)}
        </>
    )

}
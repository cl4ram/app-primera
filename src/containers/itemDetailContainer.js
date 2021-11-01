import {useEffect, useState} from "react";
import Products from "../products.json";
import { ItemDetail } from "../components/itemDetail/itemDetail";

export function ItemDetailContainer () {

    const [item, setItem] = useState([]);

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
        .then((res) => setItem(res[0]))
        .catch((err) => console.log(err));
      }, []);

    return (

        <>
        <ItemDetail item={item}/>

        </>
    )

}
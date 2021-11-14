import {useEffect, useState} from "react";
import Products from "../products.json";
import {ItemDetail} from "../components/itemDetail/itemDetail";
import { useParams } from "react-router";

export function ItemDetailContainer () {

    const [item, setItem] = useState(null);
    const [showCount, setShowCount] = useState(false);
    const [itemsInCart , setItemsInCart] = useState(undefined)

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
          .then((res) => {
              setItem(res.find((details) => details.id === itemId));
          })

          .catch((err) => console.log(err));
  }, [itemId]);

  const onAdd = (items) => {
    setShowCount(!showCount)
    setItemsInCart(items)
  }
    
      
    return (

        <>
        {item ? (
          <ItemDetail
            key={item.id}
            item={item}
            onAdd={onAdd}
            showCount={showCount}
            itemsInCart={itemsInCart}
				/>
			) : (
				'Cargando...'
			)}        
      </>
    )

}
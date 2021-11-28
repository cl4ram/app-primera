import {useEffect, useState} from "react";
import {ItemDetail} from "../components/itemDetail/itemDetail";
import { useParams } from "react-router";
import {getFirestore} from "../firebase"
import { doc, getDoc} from "@firebase/firestore";

export function ItemDetailContainer () {

    const [item, setItem] = useState(null);
    const [showCount, setShowCount] = useState(false);
    const [itemsInCart , setItemsInCart] = useState(undefined)

    const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const getProduct = (db) => {
      const item = doc(db, "items" , itemId);
      getDoc(item).then((snapshot) => {
        if (snapshot.exists()) {
          setItem(snapshot.data())
        }
      })
    };
    getProduct(db)
  }, [itemId])
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
          <div className="ring-container">
            <div className="lds-dual-ring"></div>
          </div>
)}        
      </>
    )

}
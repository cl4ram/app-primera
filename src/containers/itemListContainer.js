import {useEffect, useState} from "react";
import {ItemList} from "../components/itemList/itemList"
import {getFirestore} from "../firebase"
import { collection, query, where , getDocs } from "@firebase/firestore";
import { useParams } from "react-router";

export function ItemListContainer (props) {

  const {category} = useParams();

  const [productos, setProductos] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      const q = category
      ? query(collection(db , "items"), 
      where("tipo" , "==" , category)

      ):(
        collection(db, "items")
      );
      getDocs(q)
        .then((snapshot) => {
          setProductos(
            snapshot.docs.map((doc) => {
              const newDoc = {...doc.data(), id: doc.id};
              return newDoc
            }))
        })
    }, [category])

  return (
    <div>
      <h2>{props.greeting}</h2>
      <ItemList product={productos} tipo={category}/>
    </div>
    )
}


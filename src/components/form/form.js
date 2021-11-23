import { collection,  addDoc, getFirestore} from "@firebase/firestore";
import { useState } from "react";
import './form.css'

export const Form = ({items , total , Clean, show , close}) => {

    const [buyer, setBuyer] = useState({ name: '' , phone:'' , email:''})

    const handleBuyerChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    const sendOrder = () => {
        const db = getFirestore();
       
        const order = {buyer, items , total}
    
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({id}) => alert("Transacción realizada satisfatoriamente. Número de orden: " + id))

        Clean();
        
    } 
    

    if(!show){
        return null
    }
    
    return(
        <div className="modal"> 
            <div className="modal-content"> 
                <div className="modal-header">
                    <h1>Terminar compra</h1>
                </div>
                <div className="modal-body">
                    <label htmlFor="name">Nombre:</label>
                    <input htmlFor="name" type="text" name="name" onChange={handleBuyerChange}/>
                    <label htmlFor="phone">Phone:</label>
                    <input htmlFor="phone" type="text" name="phone" onChange={handleBuyerChange}/>
                    <label htmlFor="email">Email:</label>
                    <input htmlFor="email" type="text" name="email" onChange={handleBuyerChange}/>
                </div>
                <div className="modal-footer">
                    <input type="submit" onClick={sendOrder}/>
                    <button onClick={close}>Cerrar</button>
                </div>
            </div>
        </div>
    )
}
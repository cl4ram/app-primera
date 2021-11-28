import { collection,  addDoc, getFirestore} from "@firebase/firestore";
import { useState } from "react";
import './form.css'
import { OrderConfirm } from "../orderConfirm/orderConfirm";

export const Form = ({items , total , Clean, show , close}) => {

    const [client, setClient] = useState({ name: '' , phone:'' , email:''})
    const [id, setId] = useState(false)
    const [confirm, setConfirm] = useState(false)


    const chekOutInfo = [
        {
          label: "Nombre",
          name: "name"
        },
        {
          label: "Teléfono",
          name: "phone"
        },
        {
          label: "Mail",
          name: "email"
        }
      ];


    const handleCheckoutChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value })
    }

    const sendOrder = () => {
        const db = getFirestore();
       
        const order = {client, items , total}
    
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({id}) => {setId(id)})
        setConfirm(true)
            
    }
    

    if(!show){
        return null
    }
    
    return(
        <>
        <div className="modal"> 
            <div className="modal-content"> 
                <div className="modal-header">
                    <h1>Terminar compra</h1>
                </div>
                <div className="modal-body">
                    {chekOutInfo.map((info) => (
                        <div key={info.name}>
                            <label>{info.label}</label>
                            <input
                            value={client[info.name]}
                            name={info.name}
                            type="text"
                            onChange={handleCheckoutChange}/>
                        </div>
                    ))}
                <div className="modal-footer">
                    <button onClick={sendOrder} onKeyDown={() => setConfirm(true)} className="button-after" disabled={!(client.name && client.phone && client.email)}>Enviar</button>
                    <button onClick={close} className="button-after">Cerrar</button>
                </div>
            </div>
            
         </div> 
         </div>  
            <OrderConfirm confirm={confirm} close={() => Clean()} id={id}/>
</>
            )
        

    
                    }
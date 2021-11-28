export const OrderConfirm = ({id , close , confirm}) => {

    if(!confirm){
        return null
    }

    return(
        <>
            <div className="modal"> 
                <div className="modal-content"> 
                    <div className="modal-header">
                        <h1>Número de pedido</h1>
                    </div>
                    <div className="modal-body">
                    {id ? (
                        <p>Su numero de orden es: {id}</p>
                    ):(
                        <p>Procesando pedido...</p>
                    )}
                
                    </div>
                    <div className="modal-footer">
                        <button onClick={close} className="button-after">¡Lo tengo!</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}
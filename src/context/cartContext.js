import {createContext, useState} from 'react'

export const CartContext = createContext();
export const CartState = ({children}) => {
    const [cart, setCart] = useState([]);
    const newCart = [...cart]

    const addItem = (item , quantity) => {
        const newItem = {...item , counter: quantity};
        const isInCart = cart.some((product) => product.id === item.id);
        if (item.stock > 0) {
            if (!isInCart){
                setCart([...newCart , newItem]);
            }
        } else {
            const foundedItem = cart.find((product) => product.id === item.id);
            foundedItem.counter = foundedItem.counter + quantity;
            setCart([...newCart])
        }
        return;
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }

    const emptyCart = () => {
        setCart([])
    }

    const updateItemsInCart = (item, num) => {
        if (item.stock > 0) {
                item.stock = item.stock + num;
            }
            return console.log('Stock' , item.stock)
        }


    return (
        <CartContext.Provider value = {{cart , addItem , removeItem , emptyCart , updateItemsInCart}}>
            {children}
        </CartContext.Provider>
    )
}
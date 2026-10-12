import {createContext, useContext, useState} from "react";

const CartContext = createContext(null)

export default function CartProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    function addToCart(productId){
        const existing = cartItems.find((item) => item.id === productId)
        if (existing){
            const currentQuantity = existing.quantity
            const updatedCartItems = cartItems.map((item) => item === productId ? {id: productId, quantity: currentQuantity + 1} : item)
            setCartItems(updatedCartItems)
        } else {
            cartItems.push({id: productId, quantity: 1});
            setCartItems([...cartItems, {id: productId, quantity: 1}])
        }
    }

    return (
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    const context = useContext(CartContext)

    return context;
}
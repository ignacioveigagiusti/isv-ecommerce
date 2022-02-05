import React, { createContext, useContext, useState } from 'react';

export const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)} 

export default function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    function addToCart(item){
        setCartList([...cartList, item])
    }

    function clearCart(item){
        setCartList([])
    }

    return <cartContext.Provider value={{ cartList, addToCart, clearCart }}>
        {children}
    </cartContext.Provider>;
}

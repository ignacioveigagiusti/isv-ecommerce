import React, { createContext, useState } from 'react';

export const CartContext = createContext([])

export default function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    function addToCart(item){
        setCartList(item)
    }

    return <CartContext.Provider>
        {children}
    </CartContext.Provider>;
}

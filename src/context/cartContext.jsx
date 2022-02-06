import React, { createContext, useContext, useState } from 'react';

export const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)} 

export default function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    function addToCart(item){
        if (findDuplicate(item)){
            cartList.find( ({id}) => id === item.id).quantity += item.quantity;
        }else{
            setCartList([...cartList, item]);
        }
    }

    function clearCart(){
        setCartList([])
    }

    function removeItem(item){
        setCartList(cartList.filter(({id}) => id !== item.id))
    }

    function findDuplicate(item){
        return cartList.find( ({id}) => id === item.id)
    }

    return <cartContext.Provider value={{ cartList, addToCart, clearCart, removeItem }}>
        {children}
    </cartContext.Provider>;
}

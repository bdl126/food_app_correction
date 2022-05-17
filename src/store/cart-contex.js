import React from "react";

const CartProvider = React.createContext({
    items:[],
    totalAmount: 0,
    addItem: (item)=>{},
    removeItem: (id)=>{},
})

export default CartProvider
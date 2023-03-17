import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [cartLength, setcartLength] = useState(0);
    const [total, setTotal] = useState(0);
    const updateCart = (data) => {
        setCartItems(data.items);
        setTotal(data.subtotal);
        setcartLength(cartItems.length);
    }

    const updateOrder = (data) => {
        setOrders(data.orders);
    }
    const clearCart = () => {
        setCartItems([]);
    }

    return <Context.Provider value={{ clearCart, orders, updateOrder, cartLength, total, cartItems, updateCart }}>
        {props.children}
    </Context.Provider>
}
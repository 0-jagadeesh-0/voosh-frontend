import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getcartitems } from '../../apis/cart'
import { addorder } from '../../apis/orders'
import Navbar from '../../components/Navbar/Navbar'
import { Context } from '../../store/Context'
import './style.css'
const Cart = () => {
    const { cartItems, clearCart, updateCart, total } = useContext(Context);
    const delivery = 40;
    const navigate = useNavigate();


    const handleClick = async () => {
        await addorder({ total }).then((res) => {
            clearCart();
            navigate('/orders');
        })
    }
    return (
        <>
            <Navbar />
            {
                cartItems.length == 0 ? <div className='empty-cart'>
                    <div>Your Cart is Empty</div>
                </div> :
                    <div className='cart'>
                        <div className='items'>
                            {
                                cartItems.map((val, i) => {
                                    return <div key={i}>
                                        <div className='item-image' style={{ backgroundImage: `url(${val.image})` }}></div>
                                        <div className='item-details'>
                                            <div style={{ fontWeight: "bold", marginRight: "20px" }}>{val.name}</div>
                                            <div>₹{val.price}</div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className='checkout'>
                            <div>Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{total}</div>
                            <div>Delivery Charges:&nbsp;{delivery}</div>
                            <hr />
                            <div>Subtotal:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{total + delivery}</div>
                            <hr />
                            <button onClick={() => handleClick()} className='order-btn'>Place Order</button>
                        </div>

                    </div>
            }
        </>
    )
}

export default Cart
import React, { useState, useEffect, useContext } from 'react'
import { getorders } from '../../apis/orders';
import Navbar from '../../components/Navbar/Navbar'
import { Context } from '../../store/Context';
import './style.css'

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { updateCart } = useContext(Context);
    useEffect(() => {
        getorders().then((res) => {
            setOrders(res.data.orders);
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className='orders'>
                {
                    orders == null ? <div className='empty-order'>
                        <div>No Orders Placed</div>
                    </div> :
                        orders.map((order, i) => {
                            return <div className='order' key={i} > {order.orderItems.map((val, j) => {
                                return <div className='order-item' key={j}>
                                    <div className='order-item-image' style={{ backgroundImage: `url(${val.image})` }}></div>
                                    <div className='order-item-details'>
                                        <div style={{ fontWeight: "bold", margin: "2px 0" }}>{val.name}</div>
                                        <div>₹{val.price}</div>
                                    </div>
                                </div>
                            })
                            }
                                <div style={{ margin: "10px 0" }} className='order-amount'><span style={{ fontWeight: "bold" }}>Order Amount:</span>   ₹{order.total + 40}</div>
                                <div style={{ margin: "10px 0" }}><span style={{ fontWeight: "bold" }}>Deliver To(Phone Number):</span>   {order.phoneNumber}</div>
                            </div>

                        })
                }
            </div>
        </>
    )
}

export default Orders
import React, { useContext } from 'react'
import { addcartitem } from '../../apis/cart'
import { Context } from '../../store/Context'
import './style.css'

const Item = (props) => {

    const { updateCart } = useContext(Context);

    const handleClick = async () => {
        await addcartitem({ item: props.item }).then((res) => {
            console.log(res.data);
            updateCart(res.data);
        })
    }
    return (
        <div className='item'>
            <div className='image' style={{ backgroundImage: `url(${props.item.image})` }}></div>
            <div className='item-details'>
                <div className='item-name'>{props.item.name}</div>
                <div className='price'>₹{props.item.price}</div>
            </div>
            <button onClick={() => handleClick()} className='add-btn'>Add</button>
        </div>
    )
}

export default Item
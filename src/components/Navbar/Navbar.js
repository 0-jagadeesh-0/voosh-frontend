import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './style.css'
import { getcartitems } from '../../apis/cart';
import { Context } from '../../store/Context';

const Navbar = () => {
    const { total, cartItems, updateCart } = useContext(Context);
    const [length, setLength] = useState(0);
    useEffect(() => {
        if (localStorage.getItem("token") != null) {
            getcartitems().then((res) => {
                if (res.data.items) {
                    setLength(res.data.items.length);
                }

            })
        }
    }, [cartItems])


    const navigate = useNavigate();
    let btn_name;
    if (window.location.pathname == "/") {
        btn_name = "Login"
    }
    else if (window.location.pathname == "/login") {
        btn_name = "SignUp"
    }
    else if (window.location.pathname == "/signup") {
        btn_name = "Login"
    }

    const handleClick = () => {
        if (btn_name == "Login") {
            navigate('/login')
        }
        else {
            navigate('/signup')
        }
    }
    return (
        <div className='navbar'>
            <div onClick={() => navigate('/')} className='brand-name'>
                Voosh <span style={{ color: "royalblue" }}>Foods</span>
            </div>{
                localStorage.getItem("token") ? <div className='icons'>
                    <IconButton onClick={() => navigate('/cart')} >
                        <Badge badgeContent={length} >
                            <ShoppingCartIcon color='primary' />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={() => navigate('/profile')}>
                        <AccountCircleIcon color='primary' />
                    </IconButton> </div> : <button className='login-btn' onClick={() => {
                        handleClick()
                    }} >{btn_name}</button>
            }

        </div>
    )
}

export default Navbar
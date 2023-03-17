import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../apis/auth';
import { getuser } from '../../apis/user';
import Navbar from '../../components/Navbar/Navbar'
import { Context } from '../../store/Context';
import './style.css'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleClick = async () => {
        login({ username, password }).then(async (res) => {
            console.log(res);
            localStorage.setItem("token", res.data.jwt);
            localStorage.setItem("userId", res.data.userId);
            navigate('/');
        })
    }

    return (
        <>
            <Navbar />
            <div className='login'>
                <div className='login-form'>
                    <div className='login-username'>
                        <label style={{ fontWeight: "bold" }}>Username</label><br />
                        <input onChange={(e) => setUsername(e.target.value)} type="text" />
                    </div>
                    <div className='login-username'>
                        <label style={{ fontWeight: "bold" }}>Password</label><br />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" />
                    </div>
                    <button onClick={() => handleClick()} className='btn'>Login</button>
                </div>
            </div>
        </>

    )
}

export default Login
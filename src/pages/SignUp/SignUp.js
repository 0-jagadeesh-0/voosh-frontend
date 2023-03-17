import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signup } from '../../apis/auth';
import Navbar from '../../components/Navbar/Navbar'
import './style.css'

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleClick = async () => {
        await signup({ firstName, lastName, email, phoneNumber, username, password }).then((res) => {
            console.log(res);
            navigate('/login');
        })
    }

    return (
        <>
            <Navbar />
            <div className='signup'>
                <div className='signup-form'>
                    <div >
                        <label style={{ fontWeight: "bold" }}>First Name<span>*</span></label><br />
                        <input onChange={(e) => setFirstName(e.target.value)} type="text" />
                    </div>
                    <div >
                        <label style={{ fontWeight: "bold" }}>Last Name<span>*</span></label><br />
                        <input onChange={(e) => setLastName(e.target.value)} type="text" />
                    </div>
                    <div >
                        <label style={{ fontWeight: "bold" }}>Email<span>*</span></label><br />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" />
                    </div>
                    <div >
                        <label style={{ fontWeight: "bold" }}>Phone Number<span>*</span></label><br />
                        <input onChange={(e) => setPhoneNumber(e.target.value)} type="text" />
                    </div>
                    <div >
                        <label style={{ fontWeight: "bold" }}>Username<span>*</span></label><br />
                        <input onChange={(e) => setUsername(e.target.value)} type="text" />
                    </div>
                    <div >
                        <label style={{ fontWeight: "bold" }}>Password<span>*</span></label><br />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" />
                    </div>
                    <button onClick={() => handleClick()} className='btn'>SignUp</button>
                </div>
            </div>
        </>
    )
}

export default SignUp
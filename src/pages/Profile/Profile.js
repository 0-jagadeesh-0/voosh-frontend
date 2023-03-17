import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IconButton } from '@mui/material'
import { getuser, updateuser } from '../../apis/user'
import Navbar from '../../components/Navbar/Navbar'
import './style.css'
import { fontWeight } from '@mui/system';

const Profile = () => {
    const [user, setUser] = useState({})
    const [popup, setPopup] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [val, setVal] = useState("")
    useEffect(() => {
        getuser().then((res) => {
            setUser(res.data);
        })
    }, [popup])

    const handlePop = (arg1) => {
        setPopup(true);
        setData(arg1);

    }

    const handleUpdate = () => {
        let payload;

        if (data.inp == "firstName") {
            payload = { firstName: val }
        }
        else if (data.inp == "lastName") {
            payload = { lastName: val }
        }
        else if (data.inp == "email") {
            payload = { email: val }
        }
        else if (data.inp == "username") {
            payload = { username: val }
        }
        else if (data.inp == "phoneNumber") {
            payload = { phoneNumber: val }
        }

        updateuser(payload).then((res) => {
            setPopup(false);
        })
    }

    return (

        <>

            <Navbar />

            <div className='profile-container'>
                {
                    popup ? <div className='popup'>
                        <div className='pop-details'>
                            <div style={{ margin: "20px 0", fontWeight: "bold" }}>Update {data.first}</div>
                            <input onChange={(e) => setVal(e.target.value)} placeholder={data.second} />
                            <div style={{ margin: "10px", display: "flex", justifyContent: "space-between" }}>
                                <button className='update-btn' onClick={() => handleUpdate()}>Update</button>
                                <button className='update-btn' style={{ backgroundColor: "red" }} onClick={() => setPopup(false)}>Close</button>
                            </div>

                        </div>

                    </div> : null
                }
                <div className='profile'>
                    <div style={{ fontWeight: "bold", textAlign: "center", marginBottom: "10px" }}>Account Details</div>
                    <div className='pf-c'>
                        <div className='profile-item'> <div>First Name</div> <ModeEditIcon style={{ cursor: "pointer" }} onClick={() => { handlePop({ first: "First Name", second: user.firstName, inp: "firstName" }) }} color={'primary'} />
                        </div>
                        <div>{user.firstName}</div>
                    </div>
                    <div className='pf-c'>
                        <div className='profile-item' >
                            <div>Last Name</div>
                            <ModeEditIcon style={{ cursor: "pointer" }} onClick={() => { handlePop({ first: "Last Name", second: user.lastName, inp: "lastName" }) }} color={'primary'} />
                        </div><div>{user.lastName}</div></div>
                    <div className='pf-c'><div className='profile-item'>
                        <div>Email</div>
                        <ModeEditIcon style={{ cursor: "pointer" }} onClick={() => { handlePop({ first: "Email", second: user.email, inp: "email" }) }} color={'primary'} />
                    </div><div>{user.email}</div></div>
                    <div className='pf-c'><div className='profile-item' >
                        <div>Username</div>
                        <ModeEditIcon style={{ cursor: "pointer" }} onClick={() => { handlePop({ first: "Username", second: user.username, inp: "username" }) }} color={'primary'} />
                    </div><div>{user.username}</div></div>
                    <div className='pf-c'><div className='profile-item' >
                        <div>Phone Number</div>
                        <ModeEditIcon style={{ cursor: "pointer" }} onClick={() => { handlePop({ first: "Phone Number", second: user.phoneNumber, inp: "phoneNumber" }) }} color={'primary'} />
                    </div><div>{user.phoneNumber}</div></div>
                    <div className='pf-c view-orders' onClick={() => navigate('/orders')}>All Orders</div>
                    <div className='pf-c logout-btn' onClick={() => { localStorage.clear(); navigate('/') }} >Logout</div>
                </div>
            </div>
        </>
    )
}

export default Profile
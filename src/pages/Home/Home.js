import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './style.css'
import background from '../../assets/landing.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className='home' style={{ backgroundImage: `url(${background})` }}>
                <div onClick={() => navigate('/products')} className='items-page-btn'>
                    Order Now
                </div>
            </div>
        </>
    )
}

export default Home
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Orders from './pages/Orders/Orders';
import Items from './pages/Items/Items';
import SignUp from './pages/SignUp/SignUp';
import Profile from './pages/Profile/Profile';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/products' element={<Items />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/orders' element={<Orders />} />
            </Routes>
        </Router>
    )
}

export default App
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h4>FRUITS HILLS</h4>
            </div>
            <div className="nav">
                <p><Link to="/home">Home</Link></p>
                <p><Link to="/order">Order</Link></p>
                <p><Link to="/addProduct">Add Products</Link></p>
                <p><Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Header;
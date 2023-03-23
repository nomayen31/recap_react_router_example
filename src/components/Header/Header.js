import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/product'>Products</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/about'>About</Link>
                <Link to='/post'>Post</Link>
            </nav>
            <p>Common header</p>
        </div>
    );
};

export default Header;
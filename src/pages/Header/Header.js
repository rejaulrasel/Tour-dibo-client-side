import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/home'>Home</Link>
            <Link to='/home'>Home</Link>
            <Link to='/home'>Home</Link>
        </div>
    );
};

export default Header;
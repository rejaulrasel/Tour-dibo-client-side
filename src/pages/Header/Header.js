import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Header = () => {
    const {user,logout} = useAuth();
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/home'>Home</Link>
            <Link to='/home'>Home</Link>
            <Link to='/home'>Home</Link>
            {user.email &&
            <button onClick={logout}>Logout</button>
            }

        </div>
    );
};

export default Header;
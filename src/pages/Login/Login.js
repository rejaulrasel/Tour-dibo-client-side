import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import image from '../../images/google.png'
const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div onClick={signInUsingGoogle} style={{cursor:"pointer"}} className="login shadow p-3 w-25 pointer bg-body rounded container login">
            <img className='w-25' src={image} alt='google'/> Sign In With Google
        </div>
    );
};

export default Login;
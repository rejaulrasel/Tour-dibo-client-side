import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import image from '../../images/google.png'
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const {signInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }
    return (
        <div onClick={handleGoogleSignIn} style={{cursor:"pointer"}} className="login shadow p-3 w-25 pointer bg-body rounded container login">
            <img className='w-25' src={image} alt='google'/> Sign In With Google
        </div>
    );
};

export default Login;
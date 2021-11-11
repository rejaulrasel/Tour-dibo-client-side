import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css';
const Login = () => {
    const {signInUsingGoogle,user} = useAuth();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signInUsingGoogle}>Google</button>
            <h2>{user.displayName}</h2>
            
        </div>
    );
};

export default Login;
import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css';
const Login = () => {
    const {signInUsingGoogle,user} = useFirebase()
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signInUsingGoogle}>Google</button>
            <h2>{user.displayName}</h2>
            
        </div>
    );
};

export default Login;
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, sendEmailVerification, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    //google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user)
        //     console.log(result.user)
        //     verifyEmail()
        // })
        // .catch(err => {
        //     console.log(err.message)
        // })
        // .finally(() => setIsLoading(false))
    }

    // const verifyEmail = () => {
    //     sendEmailVerification(auth.currentUser)
    // .then( () => {
    //     console.log('email vefification sent')
    // });
    
    // }


    //observer hooks
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                console.log('inside state changed', user);
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })

        return () => unsubscribed;
    },[])

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .catch(err => {
            setError(err.message);
        })
        .finally(() => setIsLoading(false))
    }

    return{
        signInUsingGoogle,
        setUser,
        user,
        setError,
        error,
        logout,
        setIsLoading,
        isLoading,
    }
};

export default useFirebase;
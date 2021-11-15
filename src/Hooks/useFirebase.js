import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, sendEmailVerification, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    //google sign in
    // const history = useHistory();
    // const location = useLocation();
    // const redirect_uri = location.state?.from || '/home';
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setError({});
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

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
        user,
        setUser,
        setError,
        error,
        logout,
        setIsLoading,
        isLoading,
    }
};

export default useFirebase;
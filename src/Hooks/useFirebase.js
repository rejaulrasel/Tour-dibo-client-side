import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, sendEmailVerification, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    //google sign in
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
            verifyEmail()
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
    .then( () => {
        console.log('email vefification sent')
    });
    
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
            // setIsLoading(false)
        })

        return () => unsubscribed;
    },[])

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }

    return{
        signInUsingGoogle,
        user,
        logout,
    }
};

export default useFirebase;
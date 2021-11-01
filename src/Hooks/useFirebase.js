import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    


    //observer hooks
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)

            }
            else{
                setUser({})
            }
        })
    }, [])



    // useEffect(() => {
    //     const unsubscribed = onAuthStateChanged(auth, user => {
    //         if(user){
    //             console.log('inside state changed', user);
    //             setUser(user);
    //         }
    //         else{
    //             setUser({})
    //         }
    //         // setIsLoading(false)
    //     })

    //     return () => unsubscribed;
    // },[])

    return{
        signInUsingGoogle,
        user,
    }
};

export default useFirebase;
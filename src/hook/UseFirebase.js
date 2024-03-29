import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseAthuncation from "../firebase/Firebase.init";




firebaseAthuncation()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()
    //--------------- google auth povider ------------------------
    const googleProvider = new GoogleAuthProvider();
    // -------------------git hub auth porvider --------------------

    // -----------------------------------sign in with google --------------------
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })

    };
    // s------------------------------------------sing out----------------------- 
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };
    //_------------------------sing up with email and password----------------------
    const signUpwithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setUser(userCredential.user);


            })
            .catch((error) => {
                setError(error.message)
            })

    }
    //-------------------------sing in with email and possword------------------

    const singInWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setUser(userCredential.user);

            })
            .catch((error) => {
                setError(error.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside ', user);
                setUser(user)
            }
        })
    }, []);
    return {
        user,
        error,
        signInWithGoogle,
        signUpwithEmailAndPassword,
        handleSignOut,
        singInWithEmailAndPassword
    }
}
export default useFirebase;
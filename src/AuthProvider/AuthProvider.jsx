/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // user create 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
      
      // Update user's profile
      const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };

    // sign in 
    const signIn =(email, password) =>{
        return signInWithEmailAndPassword(auth,email,password),
        setLoading(true)
    }

    // sign out 

    const logOut = () =>{
        return signOut(auth),
        setLoading(true)
    }


    // on State change 

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('use in the auth state changes', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])

    //google login
    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        googleLogin,
        handleUpdateProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
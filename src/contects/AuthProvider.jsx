import React, {  createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {signOut } from "firebase/auth";




export const AuthContext=createContext();
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const createUser=(email,password) =>{
        setLoading(true) ;
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const login=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout =()=>{
        return signOut(auth)
    }

    // const signUpWithGmail=()=>{

    // }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser =>{
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();

        }
    },[])

    const authInfo={
        user,
        createUser,
        loginWithGoogle,
        loading,
        login,
        logout
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
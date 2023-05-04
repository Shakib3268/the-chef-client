import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword (auth,email,password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            console.log('Logged in user',loggedUser)
            setUser(loggedUser)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const authInfo = {user,createUser,signIn,logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                    {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
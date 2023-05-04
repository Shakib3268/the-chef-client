import React from 'react';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { createContext } from 'react';
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const user = null

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword (auth,email,password)
    }

    const authInfo = {user,createUser
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
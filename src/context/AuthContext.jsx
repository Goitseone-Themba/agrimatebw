import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };   

    const logIn = (email, password) =>  {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logout = ()  => {
        return signOut(auth)
    };

        return (
            <UserContext.Provider value={{ createUser, user, logout,logIn }}>
                {children}
            </UserContext.Provider>
        );
    };

    export const UserAuth = () => {
        return useContext(UserContext);
    }
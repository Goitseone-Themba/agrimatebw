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

      const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      };

    const logIn = (email, password) =>  {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logout = ()  => {
        return signOut(auth)
    };

        return (
            <UserContext.Provider value={{ createUser, signInWithGoogle, user, logout, logIn }}>
                {children}
            </UserContext.Provider>
        );
    };

    export const UserAuth = () => {
        return useContext(UserContext);
    }
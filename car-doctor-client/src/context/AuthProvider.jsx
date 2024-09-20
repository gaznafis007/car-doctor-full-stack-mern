import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { app } from "../Firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const[loading, setLoading] = useState(true);
    const signUp = (email, pass)=>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const login = (email, pass)=>{
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const getUser = (displayName) =>{
        return updateProfile(auth.currentUser, {displayName})
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const value = {
        user,
        loading,
        signUp,
        login,
        getUser,
        logOut
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                axios.post(`http://localhost:5000/jwt`, {email: currentUser?.email}, {
                    withCredentials: true
                })
                .then(res => {
                    // console.log(res.data)
                })
            }
            else{
                logOut()
                .then(()=>{
                    axios.get(`http://localhost:5000/logOut`)
                    .then(res => {
                        // console.log(res.data)
                    })
                })
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
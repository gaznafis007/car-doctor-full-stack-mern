import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { app } from "../Firebase/firebase.config";


const AuthContext = createContext()
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
    const logOut = ()=>{
        return signOut(auth)
    }
    const value = {
        user,
        loading,
        signUp,
        login,
        logOut
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
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
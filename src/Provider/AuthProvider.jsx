import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[auth])
    const userProfile =(name,photourl)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL:photourl
        })
    }
    const userlogout = ()=>{
        return signOut(auth)
    }



    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        userlogout,
        userProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
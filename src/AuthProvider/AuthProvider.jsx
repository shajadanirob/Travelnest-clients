import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

  // create user 
  const createUser = (email, password) => {
    setLoading(true)
    
    return createUserWithEmailAndPassword(auth,email,password);
}

// update propile
const handleUpdateProfile = (name, PhotoUrl) => {
    return updateProfile(auth.currentUser, {
        displayName: name,photoURL: PhotoUrl,
    })
}


 // signin user
 const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

 //google login
 const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
}

  // to sign out user
  const logOut = () => {
    return signOut(auth)
}

 useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
    setLoading(false)
       });
        return () => {
            unSubscribe()
        }
    }, [])



 const authentication ={
        createUser,
        handleUpdateProfile,
        signIn,
        googleLogin,
        logOut,
        user,
        loading
    }



    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
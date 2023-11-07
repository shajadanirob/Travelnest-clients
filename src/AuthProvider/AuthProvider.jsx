import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import axios from "axios";



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
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            const userEmail = currentUser?.email || user.email;
            const loggedUser ={email : userEmail}
            if(currentUser){
              
                axios.post('http://localhost:5000/jwt' ,loggedUser,{ withCredentials : true })
                .then(res =>{
                    console.log('token response',res.data)
                })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
            }




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
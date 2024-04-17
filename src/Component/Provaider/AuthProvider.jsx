import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";


export const AuthContext = createContext(null);









const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

  

    const singINUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

   const logOut = () =>{
    return signOut(auth);
   }


    const signWithGoogle = () =>{

        return signInWithPopup(auth, googleProvider);
    }


    useEffect(()=>{
        const ubSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('Current value of the user ', currentUser);
            setUser(currentUser);
            
        });
        return () =>{
            ubSubscribe();
        }
    }, [])

    const authInfo = { user, createUser, singINUser, signWithGoogle, logOut }
    

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

AuthProvider.PropTypes = {
    children: PropTypes.node
}
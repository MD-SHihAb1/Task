import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

            const createUser = (email, password) => {
                return createUserWithEmailAndPassword(auth, email, password);
            }

            const singINUser = (email, password) => {
                return signInWithEmailAndPassword(auth, email, password);
            }

            const logOut = () => {
                return signOut(auth);
            }

            const signWithGoogle = () => {
                return signInWithPopup(auth, googleProvider);
            }

            const signWithGithub = () => {
                return signInWithPopup(auth, githubProvider);
            }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current value of the user ', currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = { user, createUser, singINUser, signWithGoogle, signWithGithub, logOut };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;

import PropTypes from "prop-types";
import { AuthContext } from "../utils";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // Create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Existent user login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Observe the user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in the auth state changed', currentUser);
            setUser(currentUser)
        });
        return () => unSubscribe();
    }, [])

    // User sign out
    const userSignOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        userLogin,
        setUser,
        createUser,
        userSignOut,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
// Prop validation
FirebaseProvider.propTypes = {
    children: PropTypes.node,
}
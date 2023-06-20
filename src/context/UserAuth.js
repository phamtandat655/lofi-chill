import { createContext, useContext, useEffect, useState } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

function UserAuth({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (curUser) => {
            if (curUser) {
                setUser(curUser);
            } else {
                setUser(null);
            }
        });
    }, []);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    const signup = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
            name: name,
            email: email,
            premium: false,
        });
    };

    return <AuthContext.Provider value={{ user, login, logout, signup }}>{children}</AuthContext.Provider>;
}

export default UserAuth;

export const UseAuthContext = () => {
    return useContext(AuthContext);
};

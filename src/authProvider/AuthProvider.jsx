/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/Firebase.init";
import { FacebookAuthProvider } from "firebase/auth";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setEmail(currentUser?.email);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {});
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const authInfo = {
    createUser,
    user,
    signIn,
    logOut,
    googleSignIn,
    loading,
    setLoading,
    email,
    setEmail,
    updateUserProfile,
    facebookSignIn,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;

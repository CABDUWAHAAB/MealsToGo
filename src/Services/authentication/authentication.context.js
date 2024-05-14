import React, { useState, createContext, useRef, useMemo } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = useRef(getAuth()).current;

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

const onLogin = (email, password) => {
  setIsLoading(true);
  loginRequest(auth, email, password)
    .then((u) => {
      setUser(u);
      setIsLoading(false);
    })
    .catch((e) => {
      setIsLoading(false);
      if (e.code === "auth/user-not-found" || e.code === "auth/wrong-password") {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
      // setError(e.toString());
    });
};

const onRegister = (email, password, repeatedPassword) => {
  setIsLoading(true);
  if (password !== repeatedPassword) {
    setError("Error: Passwords do not match");
    return;
  }
  if (password.length < 6) {
    setError("Password should be at least 6 characters long.");
    setIsLoading(false);
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((u) => {
      setUser(u);
      setIsLoading(false);
    })
    .catch((e) => {
      setIsLoading(false);
      if (e.code === "auth/weak-password") {
        setError("Password should be at least 6 characters long.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    });
};

const onLogout = () => {
  signOut(auth).then(() => {
    setUser(null);
    setError(null);
  });
};

const formController = useMemo(() => ({
  isAuthenticated: !!user,
  user,
  isLoading,
  error,
  onLogin,
  onRegister,
  onLogout,
}), [user, isLoading, error, onLogin, onRegister, onLogout]);

  return (
    <AuthenticationContext.Provider value={formController}>
      {children}
    </AuthenticationContext.Provider>
  );
};
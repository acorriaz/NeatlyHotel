// Maybe I don't need this file, but I'm keeping it for now.

import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../../config/firebase-config";

const AuthContext = createContext({
  isAuthenticated: false,
  userData: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  console.log("auth.currentUser: ", auth.currentUser);

  useEffect(() => {
    handleIsAuthenticated();
  }, [isAuthenticated]);

  function handleIsAuthenticated() {
    if (auth.currentUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }

  const logout = async () => {
    try {
      const response = await auth.signOut();
      console.log("Sign Out response: ", response);
    } catch (error) {
      console.error("Error signing out", error);
    }
    setIsAuthenticated(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userData, handleIsAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { isAuthenticated, userData, handleIsAuthenticated, logout } =
    useContext(AuthContext);
  return { isAuthenticated, userData, handleIsAuthenticated, logout };
};

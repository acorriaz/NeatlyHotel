import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../../config/firebase-config";
import axios from "axios";

const AuthContext = createContext({
  isAuthenticated: false,
  userData: null,
  handleIsAuthenticated: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, set isAuthenticated and userData
        handleIsAuthenticated();
      } else {
        // User is signed out
        setIsAuthenticated(false);
        setUserData({});
      }
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  async function handleIsAuthenticated() {
    if (auth.currentUser) {
      try {
        const response = await axios.get(
          `http://localhost:4000/users/${auth.currentUser.uid}`
        );
        setUserData({
          ...response.data,
          token: auth.currentUser.stsTokenManager,
        });
        setIsAuthenticated(true);
      } catch (err) {
        console.log(err);
        alert("Login Fail");
      }
    } else {
      setIsAuthenticated(false);
    }
  }

  async function refreshUserData() {
    try {
      const response = await axios.get(
        `http://localhost:4000/users/${auth.currentUser.uid}`
      );
      setUserData({
        ...response.data,
        token: auth.currentUser.stsTokenManager,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const logout = async () => {
    try {
      const response = await auth.signOut();
      setIsAuthenticated(false);
      setUserData(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        handleIsAuthenticated,
        logout,
        refreshUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const {
    isAuthenticated,
    userData,
    handleIsAuthenticated,
    logout,
    refreshUserData,
  } = useContext(AuthContext);
  return {
    isAuthenticated,
    userData,
    handleIsAuthenticated,
    logout,
    refreshUserData,
  };
};

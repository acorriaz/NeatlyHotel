import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../../config/firebase-config";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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

  async function handleIsAuthenticated(token) {
    if (auth.currentUser) {
      try {
        const response = await axios.get(
          `http://localhost:4000/users/${auth.currentUser.uid}`
        );
        setUserData({
          ...response.data,
          role: "user",
          token: auth.currentUser.stsTokenManager,
        });
        setIsAuthenticated(true);
      } catch (err) {
        console.log(err);
        alert("Login Fail");
      }
    }
    // ถ้า Login ด้วย admin จะเข้าเงื่อนไขนี้ พร้อม token, เก็บ token ไว้ใน localStorage กำหนด role เป็น admin
    else if (token) {
      try {
        localStorage.setItem("token", token);
        const userDataFromToken = jwtDecode(token);
        setIsAuthenticated(Boolean(localStorage.getItem("token")));
        setUserData({
          role: "admin",
          token: userDataFromToken,
        });
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
      localStorage.removeItem("token");
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

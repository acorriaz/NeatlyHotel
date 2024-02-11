import { useEffect, useState, createContext, useContext } from "react";
import getUserDataFromLocalStorage from "../../utils/getUserDataFromLocalStorage";

const AuthContext = createContext({
  isAuthenticated: false,
  userData: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const userDataFromLocalStorage = getUserDataFromLocalStorage();

  useEffect(() => {
    isLogin();
  }, []);

  const isLogin = () => {
    if (userDataFromLocalStorage) {
      setIsAuthenticated(true);
      setUserData(userDataFromLocalStorage);
    } else {
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userData, isLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { isAuthenticated, userData, isLogin, logout } =
    useContext(AuthContext);
  return { isAuthenticated, userData, isLogin, logout };
};

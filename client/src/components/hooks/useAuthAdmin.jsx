import { useState, createContext, useContext, useEffect} from "react";
import axios from "axios";
import { jwtDecode } from "/node_modules/.vite/deps/jwt-decode.js?t=1709224739800&v=5ac117c6";

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  useEffect(()=>{
    if(localStorage.getItem("token")){
      const token = localStorage.getItem("token");
      const adminDataFromToken = jwtDecode(token);
      setAdmin(adminDataFromToken);
    }else{
      setAdmin(null);
    }
  },[])
  
  console.log(admin);

  const login = async (adminData) => {
    const result = await axios.post("http://localhost:4000/auth/admin/login",adminData);
    const token = result.data.token;
    localStorage.setItem("token", token);
    const adminDataFromToken = jwtDecode(token);
    setAdmin(adminDataFromToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAdmin(null);
  };

  const isAdminAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AdminAuthContext.Provider
      value={{ admin, login, logout, isAdminAuthenticated }}
    >
      {children}
    </AdminAuthContext.Provider>
  );

};

export const useAdminAuth = () => useContext(AdminAuthContext);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/hooks/useAuth";
import { SearchInputContextProvider } from "./components/context/searchInputContext";
import { AdminAuthProvider } from "./components/hooks/useAuthAdmin"

import jwtInterceptor from "./utils/jwtInterceptor.js";

jwtInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AdminAuthProvider>
        <SearchInputContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SearchInputContextProvider>
      </AdminAuthProvider>
    </AuthProvider>
  </React.StrictMode>
);

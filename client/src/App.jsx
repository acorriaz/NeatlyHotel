import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import RoomDetail from "./pages/RoomDetailPage";
import UserLoginPage from "./pages/UserLoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchResultPage from "./pages/SearchResultPage";
import PaymentPage from "./pages/PaymentPage";
import AgentRegisterPage from "./pages/AgentRegisterPage";
import AgentLoginPage from "./pages/AgentLoginPage";
import LandingPage from "./pages/LandingPage";
import AgentCustomerBooking from "./pages/AgentCustomerBooking";

function App() {
  const [token, setToken] = useState(false);

  const navigate = useNavigate();

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/hotel/user-login" element={<UserLoginPage />} />
        <Route path="/hotel/user-register" element={<RegisterPage />} />
        <Route path="/hotel/detail" element={<RoomDetail />} />
        <Route path="/hotel/result" element={<SearchResultPage />} />
        <Route path="/hotel/payment" element={<PaymentPage />} />
        <Route path="/agent-register" element={<AgentRegisterPage />} />
        <Route
          path="/agent-login"
          element={<AgentLoginPage setToken={setToken} />}
        />
        <Route path="/hotel" element={<LandingPage />} />

        {token && (
          <Route
            path="/agent-customer-booking"
            element={<AgentCustomerBooking token={token} />}
          />
        )}
      </Routes>
    </div>
  );
}

export default App;

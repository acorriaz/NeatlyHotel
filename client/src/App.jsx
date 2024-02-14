import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ScrollToTop from "./components/utils/ScrollToTop";

import RoomDetail from "./pages/RoomDetailPage";
import UserLoginPage from "./pages/UserLoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchResultPage from "./pages/SearchResultPage";
import PaymentPage from "./pages/PaymentPage";
import AgentRegisterPage from "./pages/AgentRegisterPage";
import AgentLoginPage from "./pages/AgentLoginPage";
import LandingPage from "./pages/LandingPage";
import AdminCustomerBooking from "./pages/AdminCustomerBooking";
import RoomManagementPage from "./pages/RoomManagementPage";
import RoomAndPropertyPage from "./pages/RoomAndPropertyPage";
import HotelInfoPage from "./pages/HotelInfoPage";
import CreateRoomForm from "./pages/CreateRoomForm";
import PaymentPageCard from "./pages/PaymentPageCard";

function App() {
  const [token, setToken] = useState(false);
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
      <ScrollToTop />
      <Routes>
        <Route path="/hotel/user-login" element={<UserLoginPage />} />
        <Route path="/hotel/user-register" element={<RegisterPage />} />
        <Route path="/hotel/detail" element={<RoomDetail />} />
        <Route path="/hotel/result" element={<SearchResultPage />} />
        <Route path="/hotel/payment" element={<PaymentPage />} />
        <Route path="/agent-register" element={<AgentRegisterPage />} />
        <Route path="/room-management" element={<RoomManagementPage />} />
        <Route path="/hotel-information" element={<HotelInfoPage />} />
        <Route path="/create-room-form" element={<CreateRoomForm />} />
        <Route path="/hotel" element={<LandingPage />} />

        <Route
          path="/agent-login"
          element={<AgentLoginPage setToken={setToken} />}
        />
        <Route path="/hotel" element={<LandingPage />} />

        {token && (
          <>
            <Route
              path="/room-and-property"
              element={<RoomAndPropertyPage token={token} />}
            />
            <Route
              path="/admin-customer-booking"
              element={<AdminCustomerBooking token={token} />}
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

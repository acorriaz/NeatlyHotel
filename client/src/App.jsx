import React, { useState, useEffect, useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ScrollToTop from "./components/utils/ScrollToTop";
import RoomDetail from "./pages/RoomDetailPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserUpdateProfilePage from "./pages/UserUpdateProfilePage";
import RegisterPage from "./pages/RegisterPage";
import SearchResultPage from "./pages/SearchResultPage";
import AgentLoginPage from "./pages/AgentLoginPage";
import LandingPage from "./pages/LandingPage";
import AgentCustomerBooking from "./pages/AgentCustomerBooking";
import AdminCustomerBooking from "./pages/AdminCustomerBooking";
import RoomManagementPage from "./pages/RoomManagementPage";
import RoomAndPropertyPage from "./pages/RoomAndPropertyPage";
import HotelInfoPage from "./pages/HotelInfoPage";
import CreateRoomForm from "./pages/CreateRoomForm";
import BookingHistoryPage from "./pages/BookingHistoryPage";
import BookingChangeDatePage from "./pages/BookingChangeDatePage";
import BookingRefundPage from "./pages/BookingRefundPage";
import BookingRefundSuccessPage from "./pages/BookingRefundSuccessPage";
import BookingCancelPage from "./pages/BookingCancelPage";
import BookingCancelSuccessPage from "./pages/BookingCancelSuccessPage";
import PaymentResultPage from "./pages/PaymentResultPage";
import PaymentPage from "./pages/PaymentPage";

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/users/login" element={<UserLoginPage />} />
        <Route path="/users/register" element={<RegisterPage />} />
        <Route path="/users/payment" element={<PaymentPage />} />
        <Route path="/users/update-profile" element={<UserUpdateProfilePage />} />
        <Route path="/hotel" element={<SearchResultPage />} />
        <Route path="/hotel/detail/:roomTypeId" element={<RoomDetail />} />
        <Route
          path="/users/booking-history/:userId"
          element={<BookingHistoryPage />}
        />
        <Route
          path="/users/booking-history/change-date"
          element={<BookingChangeDatePage />}
        />
        <Route
          path="/users/booking-history/refund"
          element={<BookingRefundPage />}
        />
        <Route
          path="/users/booking-history/refund-success"
          element={<BookingRefundSuccessPage />}
        />
        <Route
          path="/users/booking-history/cancel"
          element={<BookingCancelPage />}
        />
        <Route
          path="/users/booking-history/cancel-success"
          element={<BookingCancelSuccessPage />}
        />
        <Route
          path="/agent/login"
          element={<AgentLoginPage setToken={setToken} />}
        />
        <Route path="/agent/room-management" element={<RoomManagementPage />} />
        <Route path="/agent/hotel-information" element={<HotelInfoPage />} />
        <Route path="/agent/create-room" element={<CreateRoomForm />} />

        <Route path="/users/payment-result" element={<PaymentResultPage />} />
        <>
          <Route
            path="/agent/customer-booking"
            element={<AgentCustomerBooking token={token} />}
          />
          <Route
            path="/agent/room-and-property"
            element={<RoomAndPropertyPage />}
          />
          <Route
            path="/agent/admin-customer-booking"
            element={<AdminCustomerBooking token={token} />}
          />
        </>
        <Route path="/hotel/payment-result" element={<PaymentResultPage />} />
        <>
          <Route
            path="/agent/customer-booking"
            element={<AgentCustomerBooking token={token} />}
          />
          <Route
            path="/agent/room-and-property"
            element={<RoomAndPropertyPage />}
          />
          <Route
            path="/agent/admin-customer-booking"
            element={<AdminCustomerBooking token={token} />}
          />
        </>
      </Routes>
    </div>
  );
}

export default App;

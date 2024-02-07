import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/utils/ScrollToTop";
import RoomDetail from "./pages/RoomDetailPage";
import UserLoginPage from "./pages/UserLoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchResultPage from "./pages/SearchResultPage";
import PaymentPage from "./pages/PaymentPage";
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
import BookingRefundPage from "./pages/BookingRefundPage"
import BookingRefundSuccessPage from "./pages/BookingRefundSuccessPage"
import BookingCancelPage from "./pages/BookingCancelPage"
import BookingCancelSuccessPage from "./pages/BookingCancelSuccessPage"
import PaymentResultPage from "./pages/PaymentResultPage";

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
        <Route path="/hotel" element={<SearchResultPage />} />
        <Route path="/hotel/detail" element={<RoomDetail />} />
        <Route path="/hotel/payment" element={<PaymentPage />} />
<<<<<<< HEAD
        <Route path="/users/booking-history" element={<BookingHistoryPage />} />
        <Route path="/users/booking-history/change-date/:id" element={<BookingChangeDatePage />} />
        <Route path="/users/booking-history/refund/:id" element={<BookingRefundPage />} />
        <Route path="/users/booking-history/refund-success/:id" element={<BookingRefundSuccessPage />} />
        <Route path="/users/booking-history/cancel/:id" element={<BookingCancelPage />} />
        <Route path="/users/booking-history/cancel-success/:id" element={<BookingCancelSuccessPage />} />
        <Route path="/agent/login" element={<AgentLoginPage setToken={setToken} />}/>
        <Route path="/agent/room-management" element={<RoomManagementPage />} />
        <Route path="/agent/hotel-information" element={<HotelInfoPage />} />
        <Route path="/agent/create-room" element={<CreateRoomForm />} />
=======
        <Route path="/hotel/payment-result" element={<PaymentResultPage />} />
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

>>>>>>> e107c18 (feat: add payment result page)
        {token && (
          <>
            <Route path="/agent/customer-booking" element={<AgentCustomerBooking token={token} />}/>
            <Route path="/agent/room-and-property" element={<RoomAndPropertyPage token={token} />}/>
            <Route path="/agent/admin-customer-booking" element={<AdminCustomerBooking token={token} />}/>
          </> )}
      </Routes>
    </div>
  );
}

export default App;

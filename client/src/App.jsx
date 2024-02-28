import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import ScrollToTop from "./components/utils/ScrollToTop";
import RoomDetail from "./pages/RoomDetailPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserUpdateProfilePage from "./pages/UserUpdateProfilePage";
import RegisterPage from "./pages/RegisterPage";
import SearchResultPage from "./pages/SearchResultPage";
import LandingPage from "./pages/LandingPage";
import BookingHistoryPage from "./pages/BookingHistoryPage";
import BookingChangeDatePage from "./pages/BookingChangeDatePage";
import BookingRefundPage from "./pages/BookingRefundPage";
import BookingRefundSuccessPage from "./pages/BookingRefundSuccessPage";
import BookingCancelPage from "./pages/BookingCancelPage";
import BookingCancelSuccessPage from "./pages/BookingCancelSuccessPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentResultPage from "./pages/PaymentResultPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminCustomerBookingPage from "./pages/AdminCustumerBookingPage";
import AdminBookingDetailPage from "./pages/AdminBookingDetailPage";
import AdminCreateRoomTypePage from "./pages/AdminCreateRoomTypePage";
import AdminRoomAndPropertyPage from "./pages/RoomAndPropertyPage";
import RoomManagementPage from "./pages/RoomManagementPage";

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
        <Route path="/users/payment-result" element={<PaymentResultPage />} />
        <Route
          path="/users/update-profile/:userId"
          element={<UserUpdateProfilePage />}
        />
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
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin/customer-booking"
          element={<AdminCustomerBookingPage />}
        />
        <Route
          path="/admin/customer-booking/:bookingId"
          element={<AdminBookingDetailPage />}
        />
        <Route
          path="/admin/room-and-property"
          element={<AdminRoomAndPropertyPage />}
        />
        <Route
          path="/admin/room-and-property/create-room-type"
          element={<AdminCreateRoomTypePage />}
        />
        <Route path="/admin/room-management" element={<RoomManagementPage />} />
      </Routes>
    </div>
  );
}

export default App;

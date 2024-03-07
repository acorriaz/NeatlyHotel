import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useAdminAuth } from "./components/hooks/useAuthAdmin";

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
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminCustomerBookingPage from "./pages/AdminCustumerBookingPage";
import AdminBookingDetailPage from "./pages/AdminBookingDetailPage";
import AdminCreateRoomTypePage from "./pages/AdminCreateRoomTypePage";
import RoomManagementPage from "./pages/RoomManagementPage";
import RoomAndPropertyPage from "./pages/RoomAndPropertyPage";
import EditRoomPage from "./pages/AdminEditRoomPage";
import PaymentResultPage from "./pages/PaymentResultPage";
import AdminUpdateRoomTypePage from "./pages/AdminUpdateRoomTypePage";

function App() {
  // เรียกข้อมูล user or admin 
  const { isAdminAuthenticated } = useAdminAuth();
  
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users/login" element={<UserLoginPage />} />
        <Route path="/users/register" element={<RegisterPage />} />
        <Route path="/hotel" element={<SearchResultPage />} />
        <Route path="/hotel/detail/:roomTypeId" element={<RoomDetail />} />
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

        <Route path="/admin/*" element={<AdminLoginPage />} />
        {isAdminAuthenticated && (
          <>
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
              element={<RoomAndPropertyPage />}
            />
            <Route
              path="/admin/room-and-property/create-room-type"
              element={<AdminCreateRoomTypePage />}
            />
            <Route
              path="/admin/room-and-property/update-room-type/:roomTypeId"
              element={<AdminUpdateRoomTypePage />}
            />
            <Route
              path="/admin/room-management"
              element={<RoomManagementPage />}
            />
            <Route
              path="/admin/room-management/edit-room/:roomId"
              element={<EditRoomPage />}
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

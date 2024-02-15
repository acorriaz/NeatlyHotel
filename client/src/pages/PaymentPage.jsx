import NavigationBar from "../components/navigation-bar/NavigationBar";
import BookingPaymentHeader from "../components/booking-payment/BookingPaymentHeader";
import PaymentSection from "../components/booking-payment/PaymentSection";
import { useLocation } from "react-router-dom";

function PaymentPage() {
  const location = useLocation();
  const roomDetail = location.state;

  return (
    <>
      <NavigationBar />
      <div className="h-screen bg-[#F7F7FB] mt-[64px] ">
        <BookingPaymentHeader />
        <PaymentSection roomDesc={roomDetail} />;
      </div>
    </>
  );
}

export default PaymentPage;

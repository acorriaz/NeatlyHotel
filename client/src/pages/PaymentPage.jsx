import NavigationBar from "../components/navigation-bar/NavigationBar";
import BookingPaymentHeader from "../components/booking-payment/BookingPaymentHeader";
import PaymentSection from "../components/booking-payment/PaymentSection";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function PaymentPage() {
  const location = useLocation();
  const roomDetail = location.state;
  const [currentSection, setCurrentSection] = useState(1);

  function handleSectionChange(buttonType) {
    if (buttonType === "next") {
      setCurrentSection((prev) => prev + 1);
    } else if (buttonType === "back") {
      if (currentSection === 1) {
        // TODO (optional) : Modal popup Do you want to cancel the booking?
        return;
      } else {
        setCurrentSection((prev) => prev - 1);
      }
    }
  }

  return (
    <>
      <NavigationBar />
      <div className="h-screen bg-[#F7F7FB] mt-[64px] ">
        <BookingPaymentHeader currentSection={currentSection} />
        <PaymentSection
          roomDesc={roomDetail}
          currentSection={currentSection}
          handleSectionChange={handleSectionChange} />;
      </div>
    </>
  );
}

export default PaymentPage;

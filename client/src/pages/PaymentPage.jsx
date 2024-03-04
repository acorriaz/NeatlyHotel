import { useLocation } from "react-router-dom";
import { useEffect,createContext, useContext, useState } from "react";
import { useAuth } from "../components/hooks/useAuth";
import axios from "axios";

import NavigationBar from "../components/navigation-bar/NavigationBar";
import BookingPaymentHeader from "../components/booking-payment/BookingPaymentHeader";
import PaymentSection from "../components/booking-payment/PaymentSection";

const RoomDetailContext = createContext()

export const useRoomDetail = () => useContext(RoomDetailContext)

function PaymentPage() {
  const location = useLocation();
  const { userData } = useAuth() 
  const [currentSection, setCurrentSection] = useState(1);
  const [roomDetailFromDB, setRoomDetailFromDB] = useState({})
  const [userPaymentDetail, setUserPaymentDetail] = useState({
    cardNumber: "",
    cardOwner: "",
    cardExpiry: "",
    cvc: "",
  })

  
  useEffect(() => {
    setUserPaymentDetail((prev) => ({
      ...prev,
      cardNumber: userData.userProfile.cardNumber,
      cardExpiry: userData.userProfile.cardExpiry,
      cardOwner: userData.userProfile.cardOwner,
    }))
  }, [])
  
  useEffect(() => {
    async function handleInitialFetch() {
      if (location.state?.idFromSearch) {
        try {
          const response = await axios.get(`http://localhost:4000/hotel/room/${location.state.idFromSearch}`)
          setRoomDetailFromDB(response.data)
        } catch (err) {
          console.error("error in handleFetchRoom: ",err)
        }
      }
    }
    handleInitialFetch()
  }, [location.state?.idFromSearch])

  function handleUserPaymentDetail(e) {
    console.log("run?")
    const { name, value } = e.target
    setUserPaymentDetail((prev) => ({
      ...prev,
      [name]: value
    }))
  }

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
    <RoomDetailContext.Provider value={{
      roomDetailFromDB,
      userPaymentDetail,
      handleUserPaymentDetail,
    }}>
      <NavigationBar />
      <div className="h-screen bg-[#F7F7FB] mt-[64px] ">
        <BookingPaymentHeader currentSection={currentSection} />
        <PaymentSection
          currentSection={currentSection}
          handleSectionChange={handleSectionChange} />;
      </div>
    </RoomDetailContext.Provider>
  );
}

export default PaymentPage;

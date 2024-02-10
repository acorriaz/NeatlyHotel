import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import AboutHotel from "../components/landing-page/AboutHotel";
import ServiceAndFacilities from "../components/landing-page/ServiceAndFacilities";
import RoomsAndSuits from "../components/landing-page/RoomsAndSuits";
import Footer from "../components/Footer";
import Review from "../components/landing-page/Review";
import LandingBooking from "../components/landing-page/LandingBooking";
import getTokenFromLocalStorage from "../utils/getUserDataFromLocalStorage";

export default function LandingPage() {
  const location = useLocation();
  const aboutHotelRef = useRef(null);
  const serviceAndFacilitiesRef = useRef(null);
  const roomsAndSuitsRef = useRef(null);
  const bookingRef = useRef(null);

  // ฟังก์ชันเลื่อนไปที่ Section ที่ถูกกดจาก Navigation Bar
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // เลื่อนไปที่ Section ที่ถูกกดจาก Navigation Bar ทุกครั้งที่เปลี่ยน URL
  useEffect(() => {
    if (location.hash === "#about") {
      scrollToRef(aboutHotelRef);
    } else if (location.hash === "#services") {
      scrollToRef(serviceAndFacilitiesRef);
    } else if (location.hash === "#rooms") {
      scrollToRef(roomsAndSuitsRef);
    } else if (location.hash === "") {
      scrollToRef(bookingRef);
    }
    getTokenFromLocalStorage();
  }, [location]);

  return (
    <div className="w-screen">
      <NavigationBar
        onLandingPageClick={() => scrollToRef(bookingRef)}
        onAboutHotelClick={() => scrollToRef(aboutHotelRef)}
        onServiceAndFacilitiesClick={() => scrollToRef(serviceAndFacilitiesRef)}
        onRoomsAndSuitsClick={() => scrollToRef(roomsAndSuitsRef)}
      />
      <LandingBooking ref={bookingRef} />
      <AboutHotel ref={aboutHotelRef} />
      <ServiceAndFacilities ref={serviceAndFacilitiesRef} />
      <RoomsAndSuits ref={roomsAndSuitsRef} />
      <Review />
      <Footer />
    </div>
  );
}

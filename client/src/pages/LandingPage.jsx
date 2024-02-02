import NavigationBar from "../components/NavigationBar";
import AboutHotel from "../components/landing-page/AboutHotel";
import ServiceAndFacilities from "../components/landing-page/ServiceAndFacilities";
import RoomsAndSuits from "../components/landing-page/RoomsAndSuits";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="w-screen">
      <NavigationBar />;
      <AboutHotel />
      <ServiceAndFacilities />
      <RoomsAndSuits />
      <Footer />
    </div>
  );
}

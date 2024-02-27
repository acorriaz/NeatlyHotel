import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EditUserProfile from "../components/user-edit-profile/EditUserProfile";
import EditUserPayment from "../components/user-edit-profile/EditUserPayment";
import NavigationBar from "../components/navigation-bar/NavigationBar";
import { IoArrowForward } from "react-icons/io5";

export default function UserUpdateProfilePage() {
  const [currentSection, setcurrentSection] = useState("profile");
  const location = useLocation();

  function handleSectionChange(section) {
    setcurrentSection(section);
  }

  useEffect(() => {
    if (location.state && location.state.section) {
      setcurrentSection(location.state.section);
    }
  }, [location]);

  return (
    <>
      <NavigationBar />
      <div className="bg-utilBG">
        <div className="flex justify-center gap-16 mt-24 py-5 bg-utilBG headline5 text-orange500">
          <button
            className="flex items-center hover:text-orange400 active:text-orange600 focus:text-orange600"
            onClick={() => handleSectionChange("profile")}
          >
            Profile <IoArrowForward />
          </button>
          <button
            className="flex items-center hover:text-orange400 active:text-orange600 focus:text-orange600"
            onClick={() => handleSectionChange("payment")}
          >
            Payment <IoArrowForward />
          </button>
        </div>
        {currentSection === "profile" && <EditUserProfile />}
        {currentSection === "payment" && <EditUserPayment />}
      </div>
    </>
  );
}

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
        {currentSection === "profile" && (
          <EditUserProfile onSectionChange={handleSectionChange} />
        )}
        {currentSection === "payment" && (
          <EditUserPayment onSectionChange={handleSectionChange} />
        )}
      </div>
    </>
  );
}

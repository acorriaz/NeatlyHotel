import { useState } from "react";
import UserUpdateProfile from "../components/user-update-profile/UserUpdateProfile";

export default function UserUpdateProfilePage() {
  const [currentSection, setcurrentSection] = useState("profile");

  function handleSectionChange(section) {
    setcurrentSection(section);
  }

  return (
    <div>
      <div>
        <button onClick={() => handleSectionChange("profile")}>Profile</button>
        <button onClick={() => handleSectionChange("payment")}>Payment</button>
      </div>
      {currentSection === "profile" && <UserUpdateProfile />}
      {currentSection === "payment" && <h1>Payment</h1>}
    </div>
  );
}

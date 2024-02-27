import LogoNeatly from "../../assets/admin/logo.png";
import Booking from "../../assets/admin/icon/booking.png";
import Hotel from "../../assets/admin/icon/hotel.png";
import Logout from "../../assets/admin/icon/logout.png";
import Manage from "../../assets/admin/icon/manage.png";
import Room from "../../assets/admin/icon/room.png";
import { useState } from "react";

function SideBar() {
  const [activePage, setActivePage] = useState("customer-booking"); // State to store active page

  // Function to handle click on a link and set activePage state
  const handlePageClick = (pageName) => {
    setActivePage(pageName);
  };
    
  return (
    <div className="bg-green800 z-10">
      <div className="flex flex-col pb-12 sticky top-0 justify-between md:h-screen">
        <div className="flex flex-col gap-10 ">
          <div className="py-10 px-6">
            <div className="flex flex-col items-center gap-4">
              <img src={LogoNeatly} alt="logo" width={120} />
              <p className="body1 text-green400">Admin Panel Control</p>
            </div>
          </div>
          <nav className="w-60">
            <ul className="text-green100">
              <li
                className={`p-6 ${
                  activePage === "customer-booking" ? "bg-green600" : ""
                }`}
              >
                <a
                  href="/admin/customer-booking"
                  className="flex gap-4"
                  onClick={() => handlePageClick("customer-booking")}
                >
                  <img src={Booking} alt="" width={24} />
                  Customer Booking
                </a>
              </li>
              <li
                className={`p-6 ${
                  activePage === "room-management" ? "bg-green600" : ""
                }`}
              >
                <a
                  href="#"
                  className="flex gap-4"
                  onClick={() => handlePageClick("room-management")}
                >
                  <img src={Manage} alt="" width={24} />
                  Room Management
                </a>
              </li>
              <li
                className={`p-6 ${
                  activePage === "hotel-information" ? "bg-green600" : ""
                }`}
              >
                <a
                  href="#"
                  className="flex gap-4"
                  onClick={() => handlePageClick("hotel-information")}
                >
                  <img src={Hotel} alt="" width={24} />
                  Hotel Information
                </a>
              </li>
              <li
                className={`p-6 ${
                  activePage === "room-Property" ? "bg-green600" : ""
                }`}
              >
                <a
                  href="#"
                  className="flex gap-4"
                  onClick={() => handlePageClick("room-Property")}
                >
                  <img src={Room} alt="" width={24} />
                  Room & Property
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-6 hover:bg-green600 border border-green800 border-t-green700 text-green100">
          <a href="#" className="flex gap-4">
            <img src={Logout} alt="" width={24} />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

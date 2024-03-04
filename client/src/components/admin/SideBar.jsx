import LogoNeatly from "../../assets/admin/logo.png";
import Booking from "../../assets/admin/icon/booking.png";
import Logout from "../../assets/admin/icon/logout.png";
import Manage from "../../assets/admin/icon/manage.png";
import Room from "../../assets/admin/icon/room.png";
import { useState } from "react";
import { useAdminAuth } from "../hooks/useAuthAdmin";
import { useNavigate, Link } from "react-router-dom";

function SideBar(props) {
  const [activePage, setActivePage] = useState(props.pageName); // State to store active page
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  console.log(activePage);

  // Function to handle click on a link and set activePage state
    
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
                <Link
                  to="/admin/customer-booking"
                  className="flex gap-4"
                >
                  <img src={Booking} width={24} />
                  Customer Booking
                </Link>
              </li>
              <li
                className={`p-6 ${
                  activePage === "room-management" ? "bg-green600" : ""
                }`}
              >
                <Link
                  to="/admin/room-management"
                  className="flex gap-4"
                >
                  <img src={Manage} alt="" width={24} />
                  Room Management
                </Link>
              </li>
              <li
                className={`p-6 ${
                  activePage === "room-Property" ? "bg-green600" : ""
                }`}
              >
                <Link
                  to="/admin/room-and-property"
                  className="flex gap-4"
                >
                  <img src={Room} alt="" width={24} />
                  Room & Property
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-6 hover:bg-green600 border border-green800 border-t-green700 text-green100">
          <button
            className="flex gap-4"
            onClick={() => {
              logout();
              navigate("/admin/login");
            }}
          >
            <img src={Logout} alt="" width={24} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

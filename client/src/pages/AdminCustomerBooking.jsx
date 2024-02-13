import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBarAdmin from "../components/SideBarAdmin";

const AdminCustomerBooking = ({ token }) => {
  let navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  // Handle logout
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/agent-login");
  }

  // Fetch bookings from the database
  const getBookingData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/admin", {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming your API uses a bearer token for authentication
        },
      });
      // Access the `data` property of the response to get the actual bookings array
      if (Array.isArray(response.data.data)) {
        setBookings(response.data.data);
      } else {
        console.error("Received data is not an array", response.data);
        setBookings([]); // Keep the bookings array empty if data is not as expected
      }
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
      setBookings([]); // Keep the bookings array empty in case of error
    }
  };

  useEffect(() => {
    getBookingData();
  }, []); // Empty array ensures this runs once on component mount

  // Filter bookings based on search keyword
  const filteredBookings = bookings.filter(
    (booking) =>
      (booking.customer_name?.toLowerCase() || "").includes(
        searchKeyword.toLowerCase()
      ) ||
      (booking.room_type?.toLowerCase() || "").includes(
        searchKeyword.toLowerCase()
      )
  );

  // TopBar component
  const TopBar = ({ searchKeyword, setSearchKeyword }) => (
    <div
      className="top-bar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "white",
      }}
    >
      <h1 style={{ fontSize: "1.5rem" }}>
        Bookings, Hi Agent {token.user.user_metadata.full_name}
      </h1>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleLogout}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "red",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white room-and-property-page flex flex-row">
      <SideBarAdmin />
      <main className="main-content flex-1 bg-utility-white font-noto-serif">
        <TopBar
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
        <section className="booking-listing p-8">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-200">
              <tr>
                {/* <th className="p-4">Customer Name</th>
                <th className="p-4">Guest(s)</th>
                <th className="p-4">Room Type</th> */}
                <th className="p-4">Total Price</th>
                <th className="p-4">Payment Method</th>
                <th className="p-4">Check-in</th>
                <th className="p-4">Check-out</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr className="border-b" key={booking.booking_detail_id}>
                  {" "}
                  {/* Ensure this is a unique value */}
                  {/* <td className="p-4">{booking.customer_name}</td>
                  <td className="p-4">{booking.guests}</td>
                  <td className="p-4">{booking.room_type}</td> */}
                  <td className="p-4">{booking.total_price}</td>
                  <td className="p-4">{booking.payment_method}</td>
                  <td className="p-4">{booking.check_in}</td>
                  <td className="p-4">{booking.check_out}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminCustomerBooking;

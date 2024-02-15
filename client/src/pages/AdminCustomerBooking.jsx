import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBarAdmin from "../components/SideBarAdmin";

// Debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const AdminCustomerBooking = ({ token }) => {
  let navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const debouncedSearchKeyword = useDebounce(searchKeyword, 500);

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
          Authorization: `Bearer ${token}`,
        },
      });
      if (Array.isArray(response.data.data)) {
        setBookings(response.data.data);
      } else {
        console.error("Received data is not an array", response.data);
        setBookings([]);
      }
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
      setBookings([]);
    }
  };

  useEffect(() => {
    getBookingData();
  }, []);

  // Filter bookings based on debounced search keyword
  const filteredBookings = bookings.filter(
    (booking) =>
      booking.name
        ?.toLowerCase()
        .includes(debouncedSearchKeyword.toLowerCase()) ||
      booking.room_type
        ?.toLowerCase()
        .includes(debouncedSearchKeyword.toLowerCase())
  );

  const TopBar = ({ searchKeyword, setSearchKeyword }) => (
    <div className="flex justify-between items-center p-8 bg-white">
      <h1 className="text-2xl text-gray-800">Customer Booking</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="p-2 rounded border border-gray-300 bg-white"
        />
      </div>
    </div>
  );

  return (
    <div
      className="bg-white room-and-property-page flex flex-row"
      style={{ width: "100vw", height: "100vh" }}
    >
      <SideBarAdmin />
      <main className="main-content flex-1 bg-utility-white font-noto-serif">
        <TopBar
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
        <section className="booking-listing p-8">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-300 font-gray-800">
              <tr>
                <th className="p-4">Customer Name</th>
                <th className="p-4">Total Price</th>
                <th className="p-4">Payment Method</th>
                <th className="p-4">Check-in</th>
                <th className="p-4">Check-out</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr className="border-b" key={booking.booking_detail_id}>
                  <td className="p-4">{booking.name}</td>
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

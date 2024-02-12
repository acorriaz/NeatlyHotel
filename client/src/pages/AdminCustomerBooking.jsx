import { useCallback } from "react";
import React, { useState, useEffect } from "react";
import SideBarAdmin from "../components/SideBarAdmin";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../../server/utils/db";
import axios from "axios";

const AdminCustomerBooking = ({ token }) => {
  let navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/agent-login");
  }

  const [bookings, setBookings] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  // TopBar component
  const TopBar = ({ searchKeyword, setSearchKeyword }) => {
    return (
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
          Bookings , Hi Agent {token.user.user_metadata.full_name}{" "}
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
            onClick={() => {
              // Implement logout logic here
              handleLogout();
            }}
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
  };

  // Fetch bookings from the database
  const getBookingData = async () => {
    const respone = axios.get("http://localhost:5173/admin");
    console.log(respone);
  };

  useEffect(() => {
    getBookingData();
  }, []);

  // Filter bookings based on search keyword
  const filteredBookings = bookings.filter(
    (booking) =>
      booking.customer_name
        .toLowerCase()
        .includes(searchKeyword.toLowerCase()) ||
      booking.room_type.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className=" bg-white room-and-property-page flex flex-row">
      {/* SideBarAdmin component must be defined elsewhere */}
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
                <th className="p-4">Customer Name</th>
                <th className="p-4">Guest(s)</th>
                <th className="p-4">Room Type</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Bed Type</th>
                <th className="p-4">Check-in</th>
                <th className="p-4">Check-out</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr className="border-b" key={booking.id}>
                  <td className="p-4">{booking.customer_name}</td>
                  <td className="p-4">{booking.guests}</td>
                  <td className="p-4">{booking.room_type}</td>
                  <td className="p-4">{booking.amount}</td>
                  <td className="p-4">{booking.bed_type}</td>
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

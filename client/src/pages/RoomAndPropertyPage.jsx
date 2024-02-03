import React, { useEffect, useState } from "react";
import SideBarAdmin from "../components/SideBarAdmin";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aqbgthzlroeplhhywlst.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxYmd0aHpscm9lcGxoaHl3bHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1OTU5MjUsImV4cCI6MjAyMjE3MTkyNX0.opkphl2pLEzLW2C7piUj9AzkOM14XrZGy9CgEH63R-4";
export const supabase = createClient(supabaseUrl, supabaseKey);

const RoomAndPropertyPage = () => {
  const [rooms, setRooms] = useState([]);

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
        <h1 style={{ fontSize: "1.5rem" }}>Room & Property</h1>
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
              /* Implement room creation logic here */
            }}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "orange",
              color: "white",
              cursor: "pointer",
            }}
          >
            + Create Room
          </button>
        </div>
      </div>
    );
  };

  // Function to fetch room data
  const fetchRooms = async () => {
    const { data, error } = await supabase
      .from("rooms") // Replace 'rooms' with your Supabase table name
      .select("*"); // Retrieves all columns

    if (error) {
      console.error("Error fetching rooms:", error);
    } else {
      setRooms(data);
    }
  };

  // Fetch rooms when the component mounts
  useEffect(() => {
    fetchRooms();
  }, []);

  // Handler functions for click events can be defined here
  // ...

  return (
    <div className="room-and-property-page flex flex-row">
      <SideBarAdmin />
      <main className="main-content flex-1 bg-utility-white font-noto-serif">
        <TopBar />

        <section className="room-listing p-8">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Room Type</th>
                <th className="p-4">Price</th>
                <th className="p-4">Promotion Price</th>
                <th className="p-4">Guest(s)</th>
                <th className="p-4">Bed Type</th>
                <th className="p-4">Room Size</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr className="border-b" key={room.id}>
                  <td className="p-4">
                    <img
                      src={room.image_url}
                      alt={room.room_type}
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td className="p-4">{room.room_type}</td>
                  <td className="p-4">
                    {room.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="p-4">
                    {room.promotion_price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="p-4">{room.guest_capacity}</td>
                  <td className="p-4">{room.bed_type}</td>
                  <td className="p-4">{room.room_size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default RoomAndPropertyPage;

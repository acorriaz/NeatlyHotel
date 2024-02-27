import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import searchVector from "../../assets/admin/searchVector.svg";
import SideBar from "../admin/SideBar";
import EditPriceModal from "./EditModal";

const RoomAndProperty = () => {
  const [rooms, setRooms] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [promotionPrices, setPromotionPrices] = useState({});

  const [selectedRoom, setSelectedRoom] = useState(null); // Add state to track the selected room

  // Function to handle showing the edit modal for a room
  const handleOpenModal = (room) => {
    const initialPromotionPrice =
      promotionPrices[room.roomTypeId] ?? room.roomPrice;
    setSelectedRoom({ ...room, currentPromotionPrice: initialPromotionPrice }); // Incorporate the initial promotion price into the selected room object
    setShowModal(true);
  };

  const getRoom = async () => {
    try {
      const result = await axios.get(`http://localhost:4000/hotel/rooms`);
      console.log(result);
      setRooms(result.data);
    } catch (error) {
      console.error("Error searching rooms:", error);
    }
  };

  useEffect(() => {
    getRoom();
  }, []);

  useEffect(() => {
    console.log("Promotion Prices updated:", promotionPrices);
  }, [promotionPrices]);

  // Filter rooms based on search keyword before rendering
  const filteredRooms = rooms.filter(
    (room) =>
      room.roomTypeName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      room.bedType.bedTypeName
        .toLowerCase()
        .includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="bg-white room-and-property-page flex h-full">
      <SideBar />
      <main className="flex flex-col bg-gray-100 w-[1400px]">
        <div className="flex justify-between items-center px-[60px] py-[3px] bg-white w-full h-[90px]">
          <h1 className="text-lg font-semibold">Room & Property</h1>
          <div className="flex justify-between items-center p-[8px] w-[540px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className={`py-2 px-11 border rounded-[4px] w-[320px] h-[50px]`}
              />
              <img
                src={searchVector}
                alt=""
                className="absolute left-4 top-4"
              />
            </div>
            <button
              onClick={() => {
                /* Implement room creation logic here */
              }}
              className=" border rounded-[4px] bg-orange-500 text-white cursor-pointer w-[180px] h-[50px]"
            >
              <Link to="/create-room-form">+ Create Room</Link>
            </button>
          </div>
        </div>
        {/* room type list */}
        <section className="room-listing px-[60px] py-[50px] border-t-2 ">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-200 text-gray-600 text-[15px] w-full h-[45px]">
              <tr>
                <th className="p-4 w-[153px]">Image</th>
                <th className="p-4 w-[240px]">Room Type</th>
                <th className="p-4 w-[136px]">Price</th>
                <th className="p-4 w-[136px]">Promotion Price</th>
                <th className="p-4 w-[94px]">Guest(s)</th>
                <th className="p-4 w-[167px]">Bed Type</th>
                <th className="p-4 w-[128px]">Room Size</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {filteredRooms.map((room) => {
                const discount = room.roomPrice + 500;
                return (
                  <tr
                    className="border-b w-full h-[120px] py-[15px] hover:bg-gray-100 cursor-pointer"
                    key={room.roomTypeId}
                  >
                    <td className="p-4">
                      <img
                        src={room.roomImage[0].imageUrl}
                        alt={room.roomTypeName}
                        className="w-[120px] h-[72px] rounded-[5px] object-cover"
                      />
                    </td>
                    <td className="p-4">{room.roomTypeName}</td>
                    <td className="p-4" onClick={() => handleOpenModal(room)}>
                      {discount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="p-4" onClick={() => handleOpenModal(room)}>
                      {promotionPrices[room.roomTypeId] !== undefined
                        ? promotionPrices[room.roomTypeId].toLocaleString(
                            "en-US",
                            {
                              style: "currency",
                              currency: "USD",
                            }
                          )
                        : room.roomPrice.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                    </td>
                    <td className="p-4">{room.guestCapacity}</td>
                    <td className="p-4">{room.bedType.bedTypeName}</td>
                    <td className="p-4">{`${room.roomSize} sqm`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        {showModal && selectedRoom && (
          <EditPriceModal
            visible={showModal}
            onClose={() => {
              setShowModal(false);
              setSelectedRoom(null);
            }}
            room={selectedRoom}
            updateRoomState={getRoom}
            currentPromotionPrice={
              // ถ้ายังไม่มีค่า promotionPrices ให้ใช้ ค่า roomPrice แสดงก่อน
              promotionPrices[selectedRoom.roomTypeId] ?? selectedRoom.roomPrice
            }
            updatePromotionPrice={(roomId, newPrice) => {
              console.log(
                `Updating promotion price for room ${roomId} to ${newPrice}`
              );
              const changeNewPriceToNum = Number(newPrice);
              setPromotionPrices((prev) => {
                const updatedPromotions = {
                  ...prev,
                  [roomId]: changeNewPriceToNum,
                };
                return updatedPromotions;
              });
            }}
          />
        )}
      </main>
    </div>
  );
};

export default RoomAndProperty;

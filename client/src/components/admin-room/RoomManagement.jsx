import { useState, useEffect } from "react";
import axios from "axios";
import SideBarAdmin from "../SideBarAdmin";
import searchVector from "../../assets/admin/searchVector.svg";

const RoomManagement = () => {
  const [rooms, setRooms] = useState([]);
  const [isOpen, setIsOpen] = useState({});
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [status, setStatus] = useState("");

  const getRoomNumber = async () => {
    try {
      const result = await axios.get(
        "http://localhost:4000/hotel/rooms-number"
      );
      console.log(result);
      setRooms(result.data);
    } catch (error) {
      console.error("Error searching rooms:", error);
    }
  };

  const getStatusButtonColor = (statusName) => {
    const colorMap = {
      Vacant: "text-green-700 bg-gray-200",
      Occupied: "text-red-700 bg-red-100",
      "Assign Clean": "text-green-700 bg-blue-200",
      "Assign Dirty": "text-red-700 bg-red-200",
      "Vacant Clean": "text-green-700 bg-green-100",
      "Vacant Clean Inspected": "text-green-700 bg-yellow-100",
      "Vacant Clean Pick Up": "text-green-700 bg-yellow-200",
      "Occupied Clean": "text-red-700 bg-green-200",
      "Occupied Clean Inspected": "text-red-700 bg-yellow-100",
      "Occupied Dirty": "text-red-700 bg-red-200",
      "Out of Order": "text-gray-700 bg-gray-200",
      "Out of Service": "text-gray-700 bg-gray-100",
      "Out of Inventory": "text-gray-700 bg-gray-200",
    };

    return colorMap[statusName] || "gray";
  };

  const handleStatusChange = async (roomId, statusName) => {
    try {
      await axios.put(`http://localhost:4000/status/rooms/${roomId}`, {
        statusName: statusName,
      });
      setRooms((prevRooms) =>
        prevRooms.map((room) =>
          room.roomId === roomId
            ? { ...room, roomStatus: { statusName: statusName } }
            : room
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setIsOpen((prev) => ({ ...prev, [roomId]: false }));
      setSelectedRoomId(null);
      setStatus(statusName);
    }
  };

  useEffect(() => {
    getRoomNumber();
  }, []);

  const filteredRooms = rooms.filter(
    (room) =>
      room.roomType.roomTypeName
        .toLowerCase()
        .includes(searchKeyword.toLowerCase()) ||
      room.roomType.bedType.bedTypeName
        .toLowerCase()
        .includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="bg-white room-and-property-page flex h-full">
      <SideBarAdmin />
      <main className="flex flex-col bg-gray-100 w-[1400px]">
        <div className="flex justify-between items-center px-[60px] py-[3px] bg-white w-full h-[90px]">
          <h1 className="text-lg font-semibold">Room & Property</h1>
          <div className="flex justify-end items-center p-[8px] w-[540px]">
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
          </div>
        </div>
        {/* room type list */}
        <section className="room-listing px-[60px] py-[50px] border-t-2 ">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-200 text-gray-600 text-[15px] w-full h-[45px]">
              <tr>
                <th className="p-4 w-[120px]">Room no.</th>
                <th className="p-4 w-[367px]">Room Type</th>
                <th className="p-4 w-[300px]">Bed Type</th>
                <th className="p-4 w-[293px]">Status</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {filteredRooms.map((room, roomId) => {
                return (
                  <tr
                    className="border-b w-full h-[77px] py-[15px] hover:bg-gray-100"
                    key={room.roomId}
                  >
                    <td className="p-4">{room.roomNumber}</td>
                    <td className="p-4">{room.roomType.roomTypeName}</td>
                    <td className="p-4">{room.roomType.bedType.bedTypeName}</td>
                    <td className="p-4">
                      <button
                        onClick={() =>
                          setIsOpen((prev) => ({
                            ...prev,
                            [room.roomId]: !prev[room.roomId],
                          }))
                        }
                      >
                        {room.roomStatus.statusName}
                        {/* status pick part */}
                        {isOpen[room.roomId] && (
                          <div className="relative">
                            <input
                              type="text"
                              className="w-[212px] h-[45px] px-[16px] py-[12px] border-1 border-gray-200 focus:border-gray-500 outline-none transition"
                              placeholder="Search Status..."
                            />
                            <div className="absolute mt-1 w-full p-2 bg-white shadow-lg max-h-36 overflow-y-auto font-semibold">
                              <ul>
                                {rooms.map((room) => (
                                  <li
                                    key={room.roomId}
                                    onClick={() =>
                                      handleStatusChange(
                                        room.roomId,
                                        room.roomStatus.statusName
                                      )
                                    }
                                    className={`${getStatusButtonColor(
                                      room.roomStatus.statusName
                                    )} w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] `}
                                  >
                                    {room.roomStatus.statusName}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default RoomManagement;

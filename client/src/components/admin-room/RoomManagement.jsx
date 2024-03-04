import { useState, useEffect } from "react";
import axios from "axios";
import searchVector from "../../assets/admin/searchVector.svg";
import SideBar from "../admin/SideBar";
import { useNavigate } from "react-router";

const RoomManagement = () => {
  const [rooms, setRooms] = useState([]);
  const [isOpen, setIsOpen] = useState({});
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [status, setStatus] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [roomPerPage, setRoomPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

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

  const handleOnClick = (room) => {
    navigate(`/admin/room-management/edit-room/${room.roomId}`, {
      state: { room: room },
    });
  };

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

  const getStatusButtonColor = (statusName) => {
    return colorMap[statusName] || "gray";
  };

  const statusMap = {
    Vacant: 1,
    Occupied: 2,
    "Assign Clean": 3,
    "Assign Dirty": 4,
    "Vacant Clean": 5,
    "Vacant Clean Inspected": 6,
    "Vacant Clean Pick Up": 7,
    "Occupied Clean": 8,
    "Occupied Clean Inspected": 9,
    "Occupied Dirty": 10,
    "Out of Order": 11,
    "Out of Service": 12,
    "Out of Inventory": 13,
  };

  const getStatusIdByName = (statusName) => {
    return statusMap[statusName] || null;
  };

  const handleStatusChange = async (roomId, statusName) => {
    try {
      const statusId = getStatusIdByName(statusName);
      await axios.put(`http://localhost:4000/status/rooms/${roomId}`, {
        statusId: statusId,
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

  const filteredRooms = rooms.filter(
    (room) =>
      room.roomType.roomTypeName
        .toLowerCase()
        .includes(searchKeyword.toLowerCase()) ||
      room.roomType.bedType.bedTypeName
        .toLowerCase()
        .includes(searchKeyword.toLowerCase()) ||
      room.roomStatus.statusName
        .toLowerCase()
        .includes(searchKeyword.toLowerCase())
  );

  const filteredStatusNames = Object.keys(colorMap).filter((statusName) =>
    statusName.toLowerCase().includes(searchStatus.toLowerCase())
  );

  const firstRoomIndex = (currentPage - 1) * roomPerPage;
  const lastRoomIndex = Math.min(
    firstRoomIndex + roomPerPage,
    filteredRooms.length
  );
  const currentRoom = filteredRooms.slice(firstRoomIndex, lastRoomIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = Math.max(prevPage - 1, 1);
      console.log("Previous Page:", newPage);
      return newPage;
    });
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = Math.min(prevPage + 1, totalPages);
      console.log("Next Page:", newPage);
      return newPage;
    });
  };

  useEffect(() => {
    getRoomNumber();
  }, []);

  useEffect(() => {
    const total = Math.ceil(filteredRooms.length / roomPerPage);
    console.log("Total Pages:", total);
    setTotalPages(total);
  }, [filteredRooms, roomPerPage]);

  return (
    <div className="bg-white room-and-property-page flex h-full">
      <SideBar />
      <main className="flex flex-col bg-gray-100 w-full">
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
              {currentRoom.map((room) => {
                return (
                  <tr
                    className="border-b w-full h-[77px] py-[15px] hover:bg-gray-100"
                    key={room.roomId}
                  >
                    <td
                      onClick={() => handleOnClick(room)}
                      className="p-4 cursor-pointer"
                    >
                      {room.roomNumber}
                    </td>
                    <td className="p-4">{room.roomType.roomTypeName}</td>
                    <td className="p-4">{room.roomType.bedType.bedTypeName}</td>
                    <td className="p-4 relative">
                      <button
                        onClick={() =>
                          setIsOpen((prev) => ({
                            ...prev,
                            [room.roomId]: !prev[room.roomId],
                          }))
                        }
                        className={`${getStatusButtonColor(
                          room.roomStatus.statusName
                        )} w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] font-semibold`}
                      >
                        {room.roomStatus.statusName}

                        {/* status pick part */}
                        {isOpen[room.roomId] && (
                          <div
                            className="absolute left-4 mt-2 w-[300px] max-h-[350px] z-10 bg-white shadow-lg overflow-y-auto font-semibold"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <input
                              type="text"
                              className="w-max h-[45px] px-[16px] py-[12px] border-1 border-gray-200 focus:border-gray-500 outline-none transition"
                              placeholder="Search Status..."
                              onChange={(e) => setSearchStatus(e.target.value)}
                            />
                            <div className=" p-2 bg-white shadow-lg overflow-y-auto font-semibold">
                              <ul>
                                {filteredStatusNames.map((statusName) => (
                                  <li
                                    key={statusName}
                                    onClick={() =>
                                      handleStatusChange(
                                        room.roomId,
                                        statusName
                                      )
                                    }
                                    className={`${getStatusButtonColor(
                                      statusName
                                    )} w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] `}
                                  >
                                    {statusName}
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
          <div className="flex justify-center items-center w-full h-[100px]">
            <div className=" flex justify-between w-full h-fit">
              <button
                onClick={goToPreviousPage}
                className="border rounded-[4px] bg-orange-500 text-white cursor-pointer w-[180px] h-[50px] hover:bg-orange-600 disabled:bg-gray-300 disabled:text-gray-600"
                disabled={currentPage === 1}
              >
                Previous Page
              </button>
              <button
                onClick={goToNextPage}
                className="border rounded-[4px] bg-orange-500 text-white cursor-pointer w-[180px] h-[50px] hover:bg-orange-600 disabled:bg-gray-300 disabled:text-gray-600"
                disabled={currentPage === totalPages}
              >
                Next Page
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RoomManagement;

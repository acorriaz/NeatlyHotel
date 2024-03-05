import NavBarAdmin from "../admin/NavbarAdmin";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function EditRoom() {
  const location = useLocation();
  const navigate = useNavigate();
  const [room, setRoom] = useState(location.state.room);

  const [isOpen, setIsOpen] = useState({});
  const [searchStatus, setSearchStatus] = useState("");

  const [isOpenRoomType, setIsOpenRoomType] = useState({});
  const [roomType, setRoomType] = useState([]);
  const [searchRoomType, setSearchRoomType] = useState("");
  const [updateInformation, setUpdateInformation] = useState({
    roomTypeId: room.roomType.roomTypeId,
    statusId: room.statusId,
  });

  const getRoomType = async () => {
    try {
      const roomType = await axios.get("http://localhost:4000/roomdetail");
      setRoomType(roomType.data);
    } catch (error) {
      console.log(error);
    }
  };

  const putUpdateInformation = async () => {
    try {
      const result = await axios.put(
        "http://localhost:4000/status/update-room/" + room.roomId,
        {
          ...updateInformation,
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRoomType();
  }, []);

  // function รับ คำค้นหา เพื่อไปหาคำใน array RoomType แล้ว return ผลการค้นหาออกมา ถ้าไม่เจอจะ return ทั้ง array Roomtype
  const filterRoomTypeName = (search) => {
    return search
      ? roomType.filter((name) =>
          name.roomTypeName.toLowerCase().includes(search)
        )
      : roomType;
  };

  const colorMap = {
    Vacant: "text-green-700 bg-gray-200",
    Occupied: "text-blue-700 bg-blue-100",
    "Assign Clean": "text-green-700 bg-green-100",
    "Assign Dirty": "text-red-700 bg-red-100",
    "Vacant Clean": "text-green-700 bg-green-100",
    "Vacant Clean Inspected": "text-yellow-700 bg-yellow-100",
    "Vacant Clean Pick Up": "text-green-700 bg-green-100",
    "Occupied Clean": "text-blue-700 bg-blue-100",
    "Occupied Clean Inspected": "text-yellow-700 bg-yellow-100",
    "Occupied Dirty": "text-red-700 bg-red-100",
    "Out of Order": "text-gray-700 bg-gray-200",
    "Out of Service": "text-gray-700 bg-gray-200",
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

  const getStatusNameById = (objectStatus, id) => {
    for (let nameStatus in objectStatus) {
      if (objectStatus[nameStatus] === id) {
        return nameStatus;
      }
    }
  };

  const filteredStatusNames = Object.keys(colorMap).filter((statusName) =>
    statusName.toLowerCase().includes(searchStatus.toLowerCase())
  );

  return (
    <div className="w-full h-screen bg-gray100 pb-10 relative top-0 left-0 z-0">
      <NavBarAdmin
        pageName={{
          username: room.roomNumber,
          roomType: room.roomType.roomTypeName,
        }}
      />
      <div className=" mt-10 mx-[60px] pt-10 pb-[60px] px-20 flex flex-col gap-20 bg-utilWhite rounded">
        <div>
          <p className="headline5 text-gray600">Room no.</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            {room.roomNumber}
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Room type</p>
          <button
            onClick={() =>
              setIsOpenRoomType((prev) => ({
                ...prev,
                [room.roomId]: !prev[room.roomId],
              }))
            }
            className="w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] font-semibold"
          >
            {roomType.map((item) =>
              item.roomTypeId === updateInformation.roomTypeId
                ? item.roomTypeName
                : ""
            )}

            {/* roomType pick part */}
            {isOpenRoomType[room.roomId] && (
              <div
                className="absolute left-36 mt-2 w-[300px] max-h-[215px] z-10 bg-white shadow-lg overflow-y-auto font-semibold"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="text"
                  className="w-max h-[45px] px-[16px] py-[12px] border-1 border-gray-200 focus:border-gray-500 outline-none transition"
                  placeholder="Search Roomtype..."
                  onChange={(e) => setSearchRoomType(e.target.value)}
                />
                <div className=" p-2 bg-white shadow-lg overflow-y-auto font-semibold">
                  <ul>
                    {filterRoomTypeName(searchRoomType).map(
                      (roomType, index) => (
                        <li
                          key={index}
                          onClick={() =>
                            setUpdateInformation({
                              ...updateInformation,
                              roomTypeId: roomType.roomTypeId,
                            })
                          }
                          className="w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px]"
                        >
                          {roomType.roomTypeName}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}
          </button>
        </div>
        <div>
          <p className="headline5 text-gray600">Bed type</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            {room.roomType.bedType.bedTypeName}
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Status</p>
          <button
            onClick={() =>
              setIsOpen((prev) => ({
                ...prev,
                [room.roomId]: !prev[room.roomId],
              }))
            }
            className={`${getStatusButtonColor(
              getStatusNameById(statusMap, updateInformation.statusId)
            )} w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] font-semibold`}
          >
            {getStatusNameById(statusMap, updateInformation.statusId)}

            {/* status pick part */}
            {isOpen[room.roomId] && (
              <div
                className="absolute left-36 mt-2 w-[300px] max-h-[350px] z-10 bg-white shadow-lg overflow-y-auto font-semibold"
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
                          setUpdateInformation({
                            ...updateInformation,
                            statusId: getStatusIdByName(statusName),
                          })
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
        </div>
        <div className="flex gap-4 text-body1 font-sans font-fontWeight6">
          <button
            className="w-[120px] h-14 border border-orange500 py-4 px-8 text-orange500 rounded-md"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
          <button
            className="w-[120px] h-14 bg-orange600 py-4 px-8 text-utilWhite rounded-md"
            onClick={() => {
              putUpdateInformation();
              navigate(-1);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditRoom;

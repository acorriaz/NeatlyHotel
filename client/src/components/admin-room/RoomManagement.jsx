import { useState, useEffect } from "react";
import axios from "axios";
import SideBarAdmin from "../SideBarAdmin";
import searchVector from "../../assets/admin/searchVector.svg";
import { StatusPicker } from "./StatusPicker";

const RoomManagement = () => {
  const [rooms, setRooms] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState(null);

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

  const handleStatusChange = async (roomId, newStatus) => {
    const result = await axios.put(
      `http://localhost:4000/hotel/rooms/${roomId}`,
      { status: newStatus }
    );
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.roomId === roomId
          ? { ...room, roomStatus: { statusName: newStatus } }
          : room
      )
    );
    setSelectedRoomId(null);
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
              {filteredRooms.map((room) => {
                return (
                  <tr
                    className="border-b w-full h-[77px] py-[15px] hover:bg-gray-100 cursor-pointer"
                    key={room.roomId}
                  >
                    <td className="p-4">{room.roomNumber}</td>
                    <td className="p-4">{room.roomType.roomTypeName}</td>
                    <td className="p-4">{room.roomType.bedType.bedTypeName}</td>
                    <td className="p-4">
                      <button onClick={() => setSelectedRoomId(room.roomId)}>
                        {room.roomStatus.statusName}
                      </button>
                      {room.roomId === selectedRoomId && (
                        <StatusPicker
                          selectedStatus={room.roomStatus.statusName}
                          onSelect={(newStatus) =>
                            handleStatusChange(room.roomId, newStatus)
                          }
                        />
                      )}
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

// import { useState, useEffect } from "react";
// import axios from "axios";
// import SideBarAdmin from "../SideBarAdmin";
// import searchVector from "../../assets/admin/searchVector.svg";
// import { StatusPicker } from "./StatusPicker";

// const RoomManagement = () => {
//   const [rooms, setRooms] = useState([]);
//   const [searchKeyword, setSearchKeyword] = useState("");
//   const [selectedRoomId, setSelectedRoomId] = useState(null);

//   const getRoom = async () => {
//     try {
//       const result = await axios.get(
//         "http://localhost:4000/hotel/rooms-number"
//       );
//       console.log(result);
//       setRooms(result.data);
//     } catch (error) {
//       console.error("Error searching rooms:", error);
//     }
//   };

//   const handleStatusChange = async (roomId, newStatus) => {
//     const result = await axios.put(
//       `http://localhost:4000/hotel/rooms/${roomId}`,
//       { status: newStatus }
//     );
//   };

//   useEffect(() => {
//     getRoom();
//   }, []);

//   // Filter rooms based on search keyword before rendering
//   const filteredRooms = rooms.filter(
//     (room) =>
//       room.roomType.roomTypeName
//         .toLowerCase()
//         .includes(searchKeyword.toLowerCase()) ||
//       room.roomType.bedType.bedTypeName
//         .toLowerCase()
//         .includes(searchKeyword.toLowerCase())
//   );

//   return (
//     <div className="bg-white room-and-property-page flex h-full">
//       <SideBarAdmin />
//       <main className="flex flex-col bg-gray-100 w-[1400px]">
//         <div className="flex justify-between items-center px-[60px] py-[3px] bg-white w-full h-[90px]">
//           <h1 className="text-lg font-semibold">Room & Property</h1>
//           <div className="flex justify-end items-center p-[8px] w-[540px]">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchKeyword}
//                 onChange={(e) => setSearchKeyword(e.target.value)}
//                 className={`py-2 px-11 border rounded-[4px] w-[320px] h-[50px]`}
//               />
//               <img
//                 src={searchVector}
//                 alt=""
//                 className="absolute left-4 top-4"
//               />
//             </div>
//           </div>
//         </div>
//         {/* room type list */}
//         <section className="room-listing px-[60px] py-[50px] border-t-2 ">
//           <table className="w-full text-left bg-white">
//             <thead className="bg-gray-200 text-gray-600 text-[15px] w-full h-[45px]">
//               <tr>
//                 <th className="p-4 w-[120px]">Room no.</th>
//                 <th className="p-4 w-[367px]">Room Type</th>
//                 <th className="p-4 w-[300px]">Bed Type</th>
//                 <th className="p-4 w-[293px]">Status</th>
//               </tr>
//             </thead>
//             <tbody className="w-full">
//               {filteredRooms.map((room) => {
//                 return (
//                   <tr
//                     className="border-b w-full h-[77px] py-[15px] hover:bg-gray-100 cursor-pointer"
//                     key={room.roomId}
//                   >
//                     <td className="p-4">{room.roomNumber}</td>
//                     <td className="p-4">{room.roomType.roomTypeName}</td>
//                     <td className="p-4">{room.roomType.bedType.bedTypeName}</td>
//                     <td className="p-4">
//                       <button
//                         onClick={() =>
//                           handleStatusChange(
//                             room.roomId,
//                             room.roomStatus.statusName
//                           )
//                         }
//                       >
//                         {room.roomStatus.statusName}
//                       </button>
//                       {room.roomId === selectedRoomId && (
//                         <StatusPicker
//                           selectedStatus={room.roomStatus.statusName}
//                           onSelect={(newStatus) =>
//                             handleStatusChange(room.roomId, newStatus)
//                           }
//                         />
//                       )}
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default RoomManagement;

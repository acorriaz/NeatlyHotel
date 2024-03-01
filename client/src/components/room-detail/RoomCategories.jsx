import { useState } from "react";
import { Link } from "react-router-dom";

function RoomCategories(props) {
  const [roomDetail, setRoomDetail] = useState(props.room);

  const roomData = roomDetail.filter(
    (room) => room.roomTypeId === Number(props.param)
  );
  console.log(roomDetail);
  return (
    <main className="w-full h-[900px] flex justify-center content-center bg-gray300">
      <div className="w-3/5 h-[630px] flex flex-col justify-between mt-20">
        <div>
          <h1 className="headline2 text-green800">
            {roomData[0].roomTypeName}
          </h1>
          <div className="flex justify-between text-gray700">
            <div className="w-2/5 flex flex-col gap-14 pr-4 pb-4 mt-20 body1">
              <p>{roomData[0].description}</p>
              <p>
                <span> {roomData[0].guestCapacity} Person </span>
                <span> 1 {roomData[0].bedType.bedTypeName} </span>
                <span> {roomData[0].roomSize} </span>
              </p>
            </div>
            <div className="w-2/5 flex flex-col items-end gap-14 mt-20 text-gray700">
              <div>
                <p className="line-through"> THB 7,000.00 </p>
                <p> THB {roomData[0].roomPrice} </p>
              </div>
              <Link to="/hotel">
                <button
                  className="w-[143px] h-[48px] btn btn-active text-utilWhite bg-orange600 
                hover:text-orange500
                hover:border-orange500
                hover:bg-utilWhite"
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="headline5 text-utilBlack">Room Amenities</h2>
          <div className="flex gap-32 body1 text-gray700 mt-4">
            <ul>
              <li>Safe in Room </li>
              <li>Air Conditioning </li>
              <li>High speed internet connection </li>
              <li>Hairdryer </li>
              <li>Shower </li>
              <li>Bathroom amenities</li>
              <li>Lamp </li>
            </ul>
            <ul>
              <li>Minibar </li>
              <li>Telephone </li>
              <li>Ironing board </li>
              <li>A floor only accessible via a guest </li>
              <li>room key </li>
              <li>Alarm clock</li>
              <li>Bathrobe </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RoomCategories;

import { useState } from "react";

function RoomCategories() {
  const [roomDetail, setRoomDetail] = useState();

  return (
    <main className="w-full h-[935px] flex justify-center content-center mt-20">
      <div className="w-3/5 h-[630px] flex flex-col justify-between">
        <div>
          <h1 className="headline2 text-green800">Superior Garden View</h1>
          <div className="flex justify-between text-gray700">
            <div className="w-2/5 flex flex-col gap-14 pr-4 pb-4 mt-20 body1">
              <p>
                Rooms (36sqm) with full garden views, 1 single bed, bathroom
                with bathtub & shower.
              </p>
              <p>
                <span> 2 Person </span>
                <span> 1 Double bed </span>
                <span> 32 sqm </span>
              </p>
            </div>
            <div className="w-2/5 flex flex-col items-end gap-14 mt-20 text-gray700">
              <div>
                <p> THB 3,100.00 </p>
                <p> THB 2,500.00 </p>
              </div>
              <button
                className="w-[143px] h-[48px] btn btn-active text-utilWhite bg-orange600 
                hover:text-orange500
                hover:border-orange500
                hover:bg-utilWhite"
              >
                Book Now
              </button>
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

import { useState } from "react";

function RoomCategories() {
  const [roomDetail, setRoomDetail] = useState();

  const roomCategory = [{}];
  return (
    <main className="w-full h-[935px] flex justify-center content-center mt-20">
      <div className="w-3/5 h-[630px] flex flex-col justify-between">
        <div>
          <h1 className="text-7xl text-[#2F3E35]">Superior Garden View</h1>
          <div className="flex justify-between text-[#646D89]">
            <div className="w-2/5 flex flex-col gap-14 pr-4 pb-4 mt-20">
              <p className="text-lg">
                Rooms (36sqm) with full garden views, 1 single bed, bathroom
                with bathtub & shower.
              </p>
              <p>
                <span> 2 Person </span>
                <span> 1 Double bed </span>
                <span> 32 sqm </span>
              </p>
            </div>
            <div className="w-2/5 flex flex-col items-end gap-14 mt-20">
              <div>
                <p> THB 3,100.00 </p>
                <p> THB 2,500.00 </p>
              </div>
              <button
                className="w-[143px] h-[48px] btn btn-active text-white bg-[#C14817] 
                hover:text-[#C14817]
                hover:border-[#C14817]
                hover:bg-white"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Room Amenities</h2>
          <div className="flex gap-32 text-[#646D89] mt-4">
            <ul className="text-lg">
              <li>Safe in Room </li>
              <li>Air Conditioning </li>
              <li>High speed internet connection </li>
              <li>Hairdryer </li>
              <li>Shower </li>
              <li>Bathroom amenities</li>
              <li>Lamp </li>
            </ul>
            <ul className="text-lg">
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

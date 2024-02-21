import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSearchInput } from "../context/searchInputContext";
import { getCheckInDate } from "../../utils/getInputDate";

import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon";
import MinusCircleIcon from "@heroicons/react/24/outline/MinusCircleIcon";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    searchInput,
    handleRoomAndGuestCount,
    handleInputDateChange,
    rooms,
    setRooms,
  } = useSearchInput();
  const navigate = useNavigate();

  const searchRoom = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/hotel/rooms/${searchInput.guest}`
      );
      console.log(result);
      setRooms(result.data);
    } catch (error) {
      console.error("Error searching rooms:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchRoom();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative p-11 w-[1200px] bg-white rounded-md flex justify-evenly items-end gap-4"
    >
      <div className=" flex w-[536px] h-[76px] justify-between items-center">
        {/* input date */}
        <div className="w-[240px] flex flex-col justify-center gap-2">
          <label htmlFor="check_in" className="text-sm text-gray-900">
            Check In
          </label>
          <input
            type="date"
            min={getCheckInDate()}
            onChange={(e) => handleInputDateChange(e)}
            value={searchInput.checkIn}
            id="checkIn"
            name="checkIn"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="John"
            required
          />
        </div>
        <p className="items-center">-</p>
        <div className="w-[240px] flex flex-col justify-center gap-2">
          <label htmlFor="checkOut" className="text-sm text-gray-900">
            Check Out
          </label>
          <input
            type="date"
            min={searchInput.minCheckOut}
            onChange={(e) => handleInputDateChange(e)}
            value={searchInput.checkOut}
            id="checkOut"
            name="checkOut"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="John"
            required
          />
        </div>
        {/* room and guest selection */}
      </div>
      <div className="relative flex flex-col justify-between w-[240px] h-[76px] rounded-lg">
        <p className="text-sm text-gray-900">Rooms & Guests</p>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="flex justify-between w-full h-[45px] items-center px-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg active:border-black duration-300"
        >
          {`${searchInput.room} room, ${searchInput.guest} guest`}
          {!isOpen ? (
            <AiOutlineCaretDown className="h-8" />
          ) : (
            <AiOutlineCaretUp className="h-8" />
          )}
        </button>
        {isOpen && (
          <div className="bg-gray-50 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
            <div className="flex justify-between w-full h-[40px] p-[8px]">
              <p className="text-gray-900 text-sm">Room</p>
              <div className="w-[78px] h-[24px] flex justify-between">
                <button
                  onClick={() => handleRoomAndGuestCount("minus", "room")}
                >
                  <MinusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                </button>
                <p>{searchInput.room}</p>
                <button onClick={() => handleRoomAndGuestCount("plus", "room")}>
                  <PlusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                </button>
              </div>
            </div>
            <div className="flex justify-between w-full h-[40px] p-[8px]">
              <p className="text-gray-900 text-sm">Guest</p>
              <div className="w-[78px] h-[24px] flex justify-between">
                <button
                  onClick={() => handleRoomAndGuestCount("minus", "guest")}
                >
                  <MinusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                </button>
                <p>{searchInput.guest}</p>
                <button
                  onClick={() => handleRoomAndGuestCount("plus", "guest")}
                >
                  <PlusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* select button */}
      <Link to="/hotel">
        <button
          onClick={searchRoom}
          className="w-[144px] h-max px-8 py-3 rounded font-sans font-semibold text-orange-500 bg-base-100 border border-orange-500"
        >
          Search
        </button>
      </Link>
    </form>
  );
}

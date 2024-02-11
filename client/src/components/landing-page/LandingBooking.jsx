import { forwardRef, useState, useEffect } from "react";
import superiorGardenView from "../../assets/landing-page-images/superior-garden-view.jpg";
import axios from "axios";

import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon";
import MinusCircleIcon from "@heroicons/react/24/outline/MinusCircleIcon";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const LandingBooking = forwardRef((props, ref) => {
  const [roomCounter, setRoomCounter] = useState(1);
  const [guestCounter, setGuestCounter] = useState(2);
  const [rooms, setRooms] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const getRoom = async () => {
    const result = await axios.get("http://localhost:4000/hotel/rooms");
    console.log(result);
    setRooms(result.data.data);
  };

  const searchRoom = async () => {
    const result = await axios.get("http://localhost:4000/");
    setRoomCounter(result.data.data);
  };

  const handleRoomCounterChange = (counterSetter, newValue) => {
    counterSetter(newValue < 0 ? 0 : newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // check-in logic
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let minDate = tomorrow.toISOString().split("T")[0];

  // check-out logic
  let nextTomorrow = new Date();
  nextTomorrow.setDate(tomorrow.getDate() + 1);
  let nextMinDate = nextTomorrow.toISOString().split("T")[0];

  // date format logic
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    const formattedDate = `${dayName} ${day} ${monthNames[monthIndex]} ${year}`;

    return formattedDate;
  };

  useEffect(() => {
    getRoom();
  }, []);
  useEffect(() => {
    searchRoom();
  }, [rooms]);

  return (
    <div
      className="relative max-w-screen h-[900px] flex flex-col justify-center items-center gap-12"
      ref={ref}
    >
      <img
        src={superiorGardenView}
        alt="superior-garden-view"
        className="absolute w-full h-full object-cover"
      />
      <h1 className="relative font-noto-serif text-white text-medium text-center text-[5rem]">
        A Best Place for Your <br />
        Neatly Experience
      </h1>
      <form
        onSubmit={handleSubmit}
        className="relative p-11 w-[1200px] bg-white rounded-md flex justify-between items-end gap-4"
      >
        <div className="w-[240px] flex flex-col justify-center gap-2">
          <label htmlFor="check_in" className="text-sm text-gray-900">
            Check In
          </label>
          <input
            type="date"
            min={minDate}
            value={minDate}
            id="check_in"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="John"
            required
          />
        </div>
        <div className="self-center">-</div>
        <div className="w-[240px] flex flex-col justify-center gap-2">
          <label htmlFor="check_out" className="text-sm text-gray-900">
            Check Out
          </label>
          <input
            type="date"
            min={nextMinDate}
            value={nextMinDate}
            id="check_out"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        {/* room and guest selection */}
        <div className="relative flex flex-col justify-between w-[240px] h-[76px] rounded-lg">
          <p className="text-sm text-gray-900">Rooms & Guests</p>
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="flex justify-between w-full h-[45px] items-center px-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg active:border-black duration-300"
          >
            {`${roomCounter} room, ${guestCounter} guest`}
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
                    onClick={() =>
                      handleRoomCounterChange(setRoomCounter, roomCounter - 1)
                    }
                  >
                    <MinusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                  </button>
                  <p>{roomCounter}</p>
                  <button
                    onClick={() =>
                      handleRoomCounterChange(setRoomCounter, roomCounter + 1)
                    }
                  >
                    <PlusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between w-full h-[40px] p-[8px]">
                <p className="text-gray-900 text-sm">Guest</p>
                <div className="w-[78px] h-[24px] flex justify-between">
                  <button
                    onClick={() =>
                      handleRoomCounterChange(setGuestCounter, guestCounter - 1)
                    }
                  >
                    <MinusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                  </button>
                  <p>{guestCounter}</p>
                  <button
                    onClick={() =>
                      handleRoomCounterChange(setGuestCounter, guestCounter + 1)
                    }
                  >
                    <PlusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* select button */}
        <button className="w-[144px] h-max px-8 py-3 rounded font-sans font-semibold text-orange-500 bg-base-100 border border-orange-500">
          Search
        </button>
      </form>
    </div>
  );
});

export default LandingBooking;

import { createContext, useContext, useState } from "react";
import {
  getCheckInDate,
  getCheckOutDate,
  addOneDayToCheckInDate,
  isMoreThanOneDay,
} from "../../utils/getInputDate";

const SearchInputContext = createContext({
  checkIn: null,
  checkOut: null,
  guests: null,
  room: null,
});

export function SearchInputContextProvider({ children }) {
  const [rooms, setRooms] = useState([]);
  const [searchInput, setSearchInput] = useState({
    checkIn: getCheckInDate(),
    checkOut: getCheckOutDate(),
    minCheckOut: getCheckOutDate(),
    guest: 2,
    room: 1,
  });

  function handleRoomAndGuestCount(btnType, btnName) {
    setSearchInput((prev) => {
      const newCountValue =
        btnType === "minus"
          ? Math.max(1, prev[btnName] - 1)
          : prev[btnName] + 1;
      return { ...prev, [btnName]: newCountValue };
    });
  }

  function handleInputDateChange(newValue, name) {
    setSearchInput((prev) => {
      console.log(name)
      if (name === "checkIn") {
        return {
          ...prev,
          checkIn: newValue,
          minCheckOut: addOneDayToCheckInDate(newValue),
          checkOut: isMoreThanOneDay(searchInput.checkIn, searchInput.checkOut)
            ? searchInput.checkOut
            : addOneDayToCheckInDate(newValue),
        };
      } else {
        return { ...prev, checkOut: newValue };
      }
    });
  }

  return (
    <SearchInputContext.Provider
      value={{
        searchInput,
        setSearchInput,
        handleRoomAndGuestCount,
        handleInputDateChange,
        rooms,
        setRooms,
      }}
    >
      {children}
    </SearchInputContext.Provider>
  );
}

export const useSearchInput = () => {
  const {
    searchInput,
    setSearchInput,
    handleRoomAndGuestCount,
    handleInputDateChange,
    rooms,
    setRooms,
  } = useContext(SearchInputContext);
  return {
    searchInput,
    setSearchInput,
    handleRoomAndGuestCount,
    handleInputDateChange,
    rooms,
    setRooms,
  };
};

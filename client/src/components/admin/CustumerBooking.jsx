import NavBarAdmin from "./NavbarAdmin";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CustomerBooking(){
  const navigate = useNavigate();
  const [booking, setBooking] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [onActive, setOnActive] = useState(true);

  const bookingSearch = async () => {
    const result = await axios.get(
      `http://localhost:4000/admin/customer-booking?keywords=${searchInput}`
    );
    setBooking(result.data);
  };
  //แสดงวันที่แบบ ชื่อวัน วันที่ ชื่อเดือน และปี
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
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const formattedDate = `${dayName}, ${day} ${monthNames[monthIndex]} ${year}`;
    return formattedDate;
  };

  const handleOnClick = (item) => {
    navigate(`/admin/customer-booking/${item.bookingDetailId}`, 
    {
      state: { booking: item },
    });
  };

  const countDate = (date) => {
    const today = new Date().getTime()
    const checkIn = new Date(date).getTime()
    let differenceInTime = today - checkIn;
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }
  
  const getBooking = (data) => {
    setSearchInput(data);
  };

  useEffect(() => {
    bookingSearch();
  }, [searchInput]); 


  return (
    <div className="w-full h-full min-h-screen bg-gray100 flex flex-col">
      <NavBarAdmin
        pageName="Customer Booking"
        getBackBooking={getBooking}
        showSearchInput={true}
      />
      <div className=" py-[48px] px-[60px]">
        <div className="w-full flex justify-end">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-warning checkbox-sm cursor-pointer m-4"
              onChange={() => {
                setOnActive(!onActive);
              }}
              defaultChecked
            />
            Active bookings
          </label>
        </div>

        <table className="bg-gray300 rounded-t-xl w-full">
          <thead>
            <tr className="headline5 text-gray800 font-fontWeight5">
              <th className=" py-[10px] px-4 text-start">Customer name</th>
              <th className=" py-[10px] px-4 text-start">Guest(s)</th>
              <th className=" py-[10px] px-4 text-start">Room type</th>
              <th className=" py-[10px] px-4 text-start">Amount</th>
              <th className=" py-[10px] px-4 text-start">Bed Type</th>
              <th className=" py-[10px] px-4 text-start">Check-in</th>
              <th className=" py-[10px] px-4 text-start">Check-out</th>
            </tr>
          </thead>
          <tbody className="body1 text-utilBlack text-fontWeight4 bg-utilWhite">
            {booking ? (
              (onActive
                ? booking.filter(
                    (booking) =>
                      countDate(booking.checkIn) <= 0 && !booking.cancelledAt
                  )
                : booking.filter(
                    (booking) =>
                      (countDate(booking.checkIn) >= 0 &&
                        booking.cancelledAt) ||
                      countDate(booking.checkIn) >= 0
                  )
              ).map((item, index) => {
                return (
                  <tr
                    className="border border-gray300 hover:cursor-pointer hover:bg-gray100"
                    key={index}
                    onClick={() => handleOnClick(item)}
                  >
                    <td className="py-6 px-4">
                      {item.user.userProfile.fullName}
                    </td>
                    <td className="py-6 px-4">
                      {item.room.roomType.guestCapacity}
                    </td>
                    <td className="py-6 px-4">
                      {item.room.roomType.roomTypeName}
                    </td>
                    <td className="py-6 px-4">1</td>
                    <td className="py-6 px-4">
                      {item.room.roomType.bedType.bedTypeName}
                    </td>
                    <td className="py-6 px-4">{formatDate(item.checkIn)}</td>
                    <td className="py-6 px-4">{formatDate(item.checkOut)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colspan="7"
                  className="text-center h-screen text-4xl text-gray800"
                >
                  Loading
                  <span className="loading loading-dots loading-md ml-2 text-gray800"></span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
 }

export default CustomerBooking
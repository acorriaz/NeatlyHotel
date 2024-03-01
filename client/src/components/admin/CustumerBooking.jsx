import NavBarAdmin from "./NavbarAdmin";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CustomerBooking(){
  const navigate = useNavigate();
  const [booking, setBooking] = useState();
  const [searchInput, setSearchInput] = useState("");

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
  
  const getBooking = (data) => {
      setSearchInput(data);
    };

  useEffect(() => {
    bookingSearch();
  }, [searchInput]); 

  if (booking) {
  return (
    <div className="w-full h-full bg-gray100 flex flex-col">
      <NavBarAdmin
        pageName="Customer Booking"
        getBackBooking={getBooking}
        showSearchInput={true}
      />
      <div className=" py-[48px] px-[60px]">
        <table className="bg-gray300 rounded-t-xl w-full">
          <thead>
            <tr className="body2 text-gray800 font-fontWeight5">
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
            {booking.map((item, index) => {
              return (
                <tr
                  className="border border-gray300 hover:cursor-pointer hover:bg-gray100"
                  key={index}
                  onClick={() => handleOnClick(item)}
                >
                  <td className="py-6 px-4">{item.user.username}</td>
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
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
 }
}
export default CustomerBooking
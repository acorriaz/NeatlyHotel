import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function BookingRefundSuccess () {
  const location = useLocation();
  const [booking, setBooking] = useState(location.state);
  //แสดงวันที่แบบ ชื่อย่อวัน วันที่ ชื่อย่อเดือน ปี
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

    return (
      <>
        <div className="w-full p-20 mt-16 flex justify-center items-center">
          <div className="w-1/2 flex flex-col">
            <div className="w-6/7 h-[190px] text-center bg-green800 rounded-t-md">
              <h1 className="headline3 text-5xl text-utilWhite font-['noto-serif'] mx-6 mt-10 mb-2">
                Your Request has been Submitted
              </h1>
              <p className="body2 text-green400 mx-6 mb-10">
                The cancellation is complete. <br />
                You will recieve an email with a detail and refund within 48
                hours.
              </p>
            </div>
            <div className="bg-green700 rounded-b-md">
              <div className="w-6/7 h-[255px] mx-8 mt-6 mb-8 p-6 bg-green600 rounded-md">
                <h1 className="headline5 text-utilWhite mb-6">
                  {booking.data.room.roomType.roomTypeName}
                </h1>
                <div className="text-utilWhite font-inter mb-12">
                  <span className="font-fontWeight6">
                    {formatDate(booking.data.checkIn)}
                  </span>
                  <span> - </span>
                  <span className="font-fontWeight4">
                    {formatDate(booking.data.checkOut)} <br />
                    {booking.data.room.roomType.guestCapacity} Guests
                  </span>
                </div>
                <div className="body1 text-green300">
                  <p>Booking date: {formatDate(booking.data.createdAt)}</p>
                  <p>Cancellation date: {formatDate(booking.cancel)}</p>
                </div>
              </div>
              <div className="w-6/7 h-[55px] mx-8 mb-14 flex justify-between items-end">
                <span className="text-green300">Total Refund</span>
                <span className="headline5 text-utilWhite">
                  THB {booking.data.totalPrice}
                </span>
              </div>
            </div>
            <div className="w-full flex justify-center items-center font-sans font-fontWeight6">
              <Link
                to={"/users/booking-history/" + booking.data.userId}
                className="w-44 h-14 bg-orange600 text-utilWhite rounded-md mt-12 py-4 px-8"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}

export default BookingRefundSuccess;
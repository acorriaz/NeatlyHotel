import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function BookingRefund() {
  const location = useLocation();
  const [booking, setBooking] = useState(location.state);
  const [cancelRefundDate, setCancelRefundDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const putBooking = async () => {
    try {
      setIsLoading(true);
      await axios.put(
        "http://localhost:4000/bookingHistory/" + booking.bookingDetailId,
        {
          cancelledAt: cancelRefundDate,
        }
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
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
      <div className="h-screen flex flex-col p-20 mt-24 bg-utilBG">
        <h1 className="headline2 text-utilBlack font-noto-serif mx-44">
          Request a Refund
        </h1>
        <div className="h-[450px] mt-16 mx-44 bg-utilBG font-inter">
          <div className="flex justify-between gap-12">
            <div className="w-[500px] h-[200px]">
              <img
                src={booking.room.roomType.roomImage[0].imageUrl}
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex justify-between">
                <span className="headline4 text-utilBlack font-fontWeight6">
                  {booking.room.roomType.roomTypeName}
                </span>
                <span className="text-gray600 font-fontWeight4">
                  Booking date: {formatDate(booking.createdAt)}
                </span>
              </div>
              <div className="flex justify-between">
                <div className="my-10">
                  <span className="text-gray700 font-fontWeight4">
                    {formatDate(booking.checkIn)}
                  </span>
                  <span> - </span>
                  <span className="text-gray700 font-fontWeight4">
                    {formatDate(booking.checkOut)} <br />
                    {booking.room.roomType.guestCapacity} Guests
                  </span>
                </div>
                <div className="my-10">
                  <p className="text-gray900 font-fontWeight4">Total Refund</p>
                  <p className="headline5 text-gray900">
                    THB {booking.totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between font-sans font-fontWeight6 mt-20">
            <Link
              to={`/users/booking-history/${booking.userId}`}
              className="text-orange500 px-2"
            >
              Cancel
            </Link>
            <div>
              <Link
                to={{
                  pathname: "/users/booking-history/refund-success",
                }}
                state={{ data: booking, cancel: cancelRefundDate }}
                onClick={putBooking}
              >
                <button className="py-4 px-8 bg-orange600 text-utilWhite rounded-md">
                  {isLoading ? (
                    <span class="loading loading-spinner"></span>
                  ) : (
                    "Cancel and Refund this Booking"
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingRefund;

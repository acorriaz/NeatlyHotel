import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function BookingCancel() {
  const location = useLocation();
  const [booking, setBooking] = useState(location.state);
  const [cancelDate, setCancelDate] = useState(new Date());

  const putBooking = async () => {
    try {
      await axios.put(
        "http://localhost:4000/bookingHistory/" + booking.booking_detail_id,
        {
          canceled_at: cancelDate,
        }
      );
    } catch (error) {
      console.log(error);
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
      <div className="p-20 mt-16">
        <h1 className="headline2 text-utilBlack font-['noto-serif'] w-1/2 mx-44">
          Cancel Booking
        </h1>
        <div className="w-3/4 h-[400px] mt-16 mx-44 font-inter">
          <div className="flex justify-between gap-12">
            <div className="w-[500px] h-[200px]">
              <img
                src={booking.room_id.room_type_id.room_image_url}
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex justify-between">
                <span className="headline4 text-utilBlack font-fontWeight6">
                  {booking.room_id.room_type_id.room_type}
                </span>
                <span className="text-gray600 font-fontWeight4">
                  Booking date: {formatDate(booking.created_at)}
                </span>
              </div>
              <div className="flex justify-between">
                <div className="my-10">
                  <span className="text-gray700 font-fontWeight4">
                    {formatDate(booking.check_in)}
                  </span>
                  <span> - </span>
                  <span className="text-gray700 font-fontWeight4">
                    {formatDate(booking.check_out)}
                  </span>
                  <p className="body3 text-utilRed mt-8">
                    *Cancellation of the booking now will not be able to request
                    a refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between font-sans font-fontWeight6 mt-16">
            <Link
              to={`/users/booking-history/${booking.user_id.user_id}`}
              className="text-orange500 px-2"
            >
              Cancel
            </Link>
            <div>
              <Link
                to={{
                  pathname: "/users/booking-history/cancel-success",
                }}
                state={{ data: booking, cancel: cancelDate }}
                onClick={putBooking}
              >
                <button className="py-4 px-8 bg-orange600 text-utilWhite rounded-md">
                  Cancel this Booking
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingCancel;

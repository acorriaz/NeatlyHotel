import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePickerComponent from "../utils/DatePicker";

function BookingChangeDate() {
  const location = useLocation();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(location.state.data);
  const [checkIn, setCheckIn] = useState(location.state.data.checkIn);
  const [checkOut, setCheckOut] = useState(location.state.data.checkOut);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    changeDateFunc(checkIn);
  }, [checkIn]);

  const putBooking = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await axios.put(
        "http://localhost:4000/bookingHistory/" + booking.bookingDetailId,
        {
          checkIn: checkIn,
          checkOut: checkOut,
        }
      );
      setIsLoading(false);
      navigate(`/users/booking-history/${location.state.data.userId}`);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
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
  //หาระยะห่างของวัน checkin และ วัน checkout
  const differenceDate = () => {
    let timeStart = new Date(location.state.data.checkIn).getTime();
    let timeEnd = new Date(location.state.data.checkOut).getTime();
    let differenceInTime = timeEnd - timeStart;
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };
  //เมื่อกดเปลี่ยนวัน checkin วัน checkOut จะเปลี่ยนตามระยะห่างของวันจองเดิม
  const changeDateFunc = (checkIn) => {
    let difDate = differenceDate();
    let newDate = new Date(checkIn);
    newDate.setDate(newDate.getDate() + difDate);
    let formattedDate = newDate.toISOString().split("T")[0];
    setCheckOut(formattedDate);
  };

  const setdate = (newValue) => {
    if (newValue) {
      setCheckIn(newValue.format("YYYY-MM-DD"));
    }
  };

  if (booking) {
    return (
      <>
        <div className="h-screen flex flex-col p-20 mt-24 bg-utilBG">
          <h1 className="headline2 text-utilBlack font-noto-serif mx-44">
            Change Check-in <br /> and Check-out Date
          </h1>
          <div
            className="h-[450px] mt-16 mx-44 bg-utilBG font-inter"
            onSubmit={putBooking}
          >
            <div className="flex justify-between gap-12">
              <div className="w-[500px] h-[200px]">
                <img
                  src={booking.room.roomType.roomImage[0].imageUrl}
                  className="w-full h-full rounded-md"
                />
              </div>
              <div className="w-full flex flex-col">
                <div className="flex justify-between">
                  <p className="headline4 text-utilBlack">
                    {booking.room.roomType.roomTypeName}
                  </p>
                  <p className="text-gray600 font-fontWeight4">
                    Booking date: {formatDate(booking.createdAt)}
                  </p>
                </div>
                <div className="my-8">
                  <p className="text-gray800 font-fontWeight6">Original Date</p>
                  <span className="text-gray700 font-fontWeight4 mr-2">
                    {formatDate(booking.checkIn)}
                  </span>
                  -
                  <span className="text-gray700 font-fontWeight4 ml-2">
                    {formatDate(booking.checkOut)}
                  </span>
                </div>
                <div className="bg-utilWhite rounded">
                  <p className="text-gray800 font-fontWeight6 mx-6 mt-6">
                    Change Date
                  </p>
                  <div className="flex items-center gap-12 my-4 mx-6 text-gray900">
                    <div className="w-1/2">
                      <p className="font-fontWeight4">Check-in</p>
                      <DatePickerComponent
                        name="checkInEdit"
                        value={checkIn}
                        minDate={location.state.data.checkIn}
                        func={setdate}
                      />
                    </div>
                    <span>-</span>
                    <div className="w-1/2">
                      <p className="font-fontWeight4">Check-out</p>
                      <DatePickerComponent value={checkOut} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between font-sans font-fontWeight6 my-10">
              <Link
                to={`/users/booking-history/${location.state.data.userId}`}
                className="text-orange500 px-2"
              >
                Cancel
              </Link>
              <div>
                <button
                  className="py-4 px-8 bg-orange600 text-utilWhite rounded-md"
                  onClick={() =>
                    document.getElementById("modelCancel").showModal()
                  }
                >
                  Confirm Change Date
                </button>
              </div>
            </div>
          </div>
          <dialog id="modelCancel" className="modal">
            <div className="modal-box font-inter">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray500">
                  ✕
                </button>
              </form>
              <h3 className="headline5 text-utilBlack">Change Date</h3>
              <p className="py-4 body2">
                Are you sure you want to change your check-in and check-out
                date?
              </p>
              <div className="flex justify-end gap-4 body3 w-full font-sans">
                <form method="dialog" className="w-1/4">
                  <button className="py-4 px-2 w-full border border-orange500 bg-white rounded-md text-orange500">
                    No, I don’t
                  </button>
                </form>
                <button
                  className="py-4 px-2 w-2/5 bg-orange500 rounded-md text-white "
                  onClick={putBooking}
                >
                  {isLoading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Yes, I want to change"
                  )}
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </>
    );
  }
}

export default BookingChangeDate;

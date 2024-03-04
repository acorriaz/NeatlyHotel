import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardBooking from "./CardBooking";
import ModelPopUp from "./ModelPopup";

function BookingHistory() {
  const [booking, setBooking] = useState();
  const [bookingOnClick, setBookingOnClick] = useState();
  const params = useParams();
  console.log(booking);

  const getBooking = async () => {
    try {
      const resultBooking = await axios.get(
        "http://localhost:4000/bookinghistory/" + params.userId
      );
      setBooking(resultBooking.data);
    } catch (error) {
      console.log(error);
    }
  };
  //ส่ง function เพื่อไปรับข้อมูล booking ที่เลือกจาก child component card booking
  const sendBookingComeBack = (data) => {
    setBookingOnClick(data);
  };

  //แปลงวันเวลาเป็น milliseconds
  const isShowsWithDate = (checkIn) => {
    let toDay = new Date();
    let checkInDay = new Date(checkIn);
    let result = checkInDay.getTime() - toDay.getTime();
    result = Math.round(result / 3600000 + 7); //แปลง milliseconds เป็นชั่วโมง
    return result;
  };

  //function รับ arrayBooking และหา booking ที่ canceled , เลยวันที่ checkin ไปแล้ว
  const bookingNotAvailable = (booking) => {
    return booking.filter((booking) => {
      return booking.cancelledAt || isShowsWithDate(booking.checkIn) <= 0;
    });
  };

  //function รับ arrayBooking และหา booking ที่ ไม่โดน canceled และ ยังไม่เลยวันที่ checkin 
  const bookingAvailable = (booking) => {
    return booking.filter((booking) => {
      return isShowsWithDate(booking.checkIn) > 0 && !booking.cancelledAt;
    });
  };

  useEffect(() => {
    getBooking();
  }, []);

  {
      return (
        <>
          <div className="p-20 mt-16 bg-gray100">
            <h1 className="headline2 text-utilBlack font-['noto-serif'] mx-44">
              Booking History
            </h1>
            <div className="mt-16 mx-44">
              {bookingAvailable(booking).map((item, index) => {
                return (
                  <CardBooking
                    key={index}
                    data={item}
                    sendBooking={sendBookingComeBack}
                  />
                );
              })}
              {bookingNotAvailable(booking).map((item, index) => {
                return (
                  <CardBooking
                    key={index}
                    data={item}
                    sendBooking={sendBookingComeBack}
                  />
                );
              })}
            </div>
            <ModelPopUp
              id={"modelCancelAndRefund"}
              body={"Are you sure you would like to cancel this booking?"}
              confirm={"Yes, I want to cancel and request refund"}
              cancel={"No, Don’t Cancel"}
              link={"/users/booking-history/refund"}
              state={bookingOnClick}
            />
            <ModelPopUp
              id={"modelCancel"}
              body={"Are you sure you would like to cancel this booking?"}
              confirm={"Yes, I want to cancel"}
              cancel={"No, Don’t Cancel"}
              link={"/users/booking-history/cancel"}
              state={bookingOnClick}
            />
          </div>
        </>
      );
    }
  }

export default BookingHistory;

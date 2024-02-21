import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardBooking from "./CardBooking";
import ModelPopUp from "./ModelPopup";

function BookingHistory() {
  const [booking, setBooking] = useState();
  const [bookingOnClick, setBookingOnClick] = useState();
  const params = useParams();
  
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
  }

  useEffect(() => {
    getBooking();
  }, []);

  {
    if (booking) {
      return (
        <>
          <div className="p-20 mt-16">
            <h1 className="headline2 text-utilBlack font-['noto-serif'] mx-44">
              Booking History
            </h1>
            <div className="border mt-16 mx-44">
              {booking.map((item, index) => {
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
}

export default BookingHistory;

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardBooking from "./CardBooking";
import ModelPopUp from "./ModelPopup";

function BookingHistory() {
  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingOnClick, setBookingOnClick] = useState(null);
  const params = useParams();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resultBooking = await axios.get(
        `http://localhost:4000/bookinghistory/${params.userId}`
      );
      setBooking(resultBooking.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [params.userId]);

  const sendBookingComeBack = (data) => {
    setBookingOnClick(data);
  };

  const isShowsWithDate = (checkIn) => {
    const today = new Date();
    const checkInDay = new Date(checkIn);
    let result = checkInDay.getTime() - today.getTime();
    result = Math.round(result / 3600000 + 7); //แปลง milliseconds เป็นชั่วโมง
    return result;
  };

  const bookingAvailable = (booking) => {
    return booking.filter((item) => {
      return isShowsWithDate(item.checkIn) > 0 && !item.cancelledAt;
    });
  };

  const bookingNotAvailable = (booking) => {
    return booking.filter((item) => {
      return item.cancelledAt || isShowsWithDate(item.checkIn) <= 0;
    });
  };

  const renderBookingCards = (bookingData) => {
    return bookingData.map((item, index) => (
      <CardBooking key={index} data={item} sendBooking={sendBookingComeBack} />
    ));
  };

  return (
    <div className="p-20 mt-16 bg-gray100">
      <h1 className="headline2 text-utilBlack font-['noto-serif'] mx-44">
        Booking History
      </h1>
      <div className="mt-16 mx-44">
        {isLoading ? (
          <div className="py-10 bg-gray100 flex justify-center gap-2 text-3xl">
            Loading
            <span className="loading loading-dots loading-sm"></span>
          </div>
        ) : booking && booking.length > 0 ? (
          <>
            {renderBookingCards(bookingAvailable(booking))}
            {renderBookingCards(bookingNotAvailable(booking))}
          </>
        ) : (
          <div className="py-10 bg-gray100 flex justify-center items-center text-3xl">
            You don’t have booking data.
          </div>
        )}
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
  );
}

export default BookingHistory;

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardBooking from "./CardBooking";

function BookingHistory() {
  const [booking, setBooking] = useState();
  const params = useParams();

  const getBooking = async () => {
    try {
      const resultBooking = await axios.get(
        "http://localhost:4000/bookinghistory/" + params.userId
      );
      setBooking(resultBooking.data.data);
    } catch (error) {
      console.log(error);
    }
  };

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
                return <CardBooking key={index} data={item} />;
              })}
            </div>
          </div>
        </>
      );
    }
  }
}

export default BookingHistory;

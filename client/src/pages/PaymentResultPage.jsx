import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "../components/navigation-bar/NavigationBar";
import { useAuth } from "../components/hooks/useAuth";

function PaymentResultPage() {
  const { isAuthenticated, userData } = useAuth();
  const [Loading, setLoading] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    room: {},
  });
  console.log(userData);
  console.log(bookingInfo);

  useEffect(() => {
    if (userData && bookingInfo) {
      getRecentBooking();
    }
  }, [userData]);

  const getRecentBooking = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:4000/booking/recent-booking/${userData.id}`
      );
      console.log(result.data);

      const { bookingDetail, roomInfo, requests } = result.data;

      setBookingInfo({
        ...bookingDetail,
        room: { ...roomInfo },
      });

      const simplifiedRequests = requests.map((request) => {
        return {
          name: request.request_name,
          price: request.request_price,
          type: request.request_type,
        };
      });

      simplifiedRequests.forEach((request) => {
        console.log(request.name, request.price);
      });

      if (!bookingInfo) {
        return <div>Loading</div>;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // format date part vvv

  const checkIn = bookingInfo.check_in;
  const checkOut = bookingInfo.check_out;

  function dateFormat(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return "Loading...";
    const optionsDayWeek = { weekday: "short" };
    const optionsMonth = { month: "short" };
    const optionsDay = { day: "numeric" };
    const optionsYear = { year: "numeric" };

    const dayWeek = date.toLocaleDateString("en-US", optionsDayWeek);
    const month = date.toLocaleDateString("en-US", optionsMonth);
    const day = date.toLocaleDateString("en-US", optionsDay);
    const year = date.toLocaleDateString("en-US", optionsYear);

    return `${dayWeek}, ${month} ${day} ${year}`;
  }

  const formattedCheckIn = dateFormat(checkIn);
  const formattedCheckOut = dateFormat(checkOut);
  const formattedDate = `${formattedCheckIn} - ${formattedCheckOut}`;

  // format date part ^^^

  // check payment method part vvv

  function checkPaymentMethod() {
    const paymentMethod = bookingInfo.payment_method;
    console.log(paymentMethod);
  }

  // check payment method part vvv
  if (bookingInfo) {
    return (
      <>
        <NavigationBar />
        <main className="flex justify-center items-center pt-12 bg-gray300">
          <section className="max-w-[738px]">
            <section className="text-center bg-green800 py-9 px-14">
              <h2 className="headline3 text-utilWhite">
                Thank you for booking
              </h2>
              <p className="body2 text-green400 px-1 mt-4">
                We are looking forward to hosting you at our place.<br></br> We
                will send you more information about check-in and staying at our
                Neatly closer to your date of reservation
              </p>
            </section>

            <section className="flex flex-col w-full bg-green700 px-7 pt-4 pb-7">
              <div className="flex justify-between bg-green600 my-2 p-6 rounded text-body1 text-utilWhite">
                <article>
                  <p className="font-fontWeight6">{formattedDate}</p>
                  <p className="font-fontWeight4">
                    {bookingInfo?.room?.guestNumber}
                  </p>
                </article>

                <div className="flex gap-10">
                  <article>
                    <p className="font-fontWeight6">Check-in</p>
                    <p className="font-fontWeight4">After 2:00 PM</p>
                  </article>
                  <article>
                    <p className="font-fontWeight6">Check-out</p>
                    <p className="font-fontWeight">Before 12:00 PM</p>
                  </article>
                </div>
              </div>
              <div className="flex justify-end my-6 gap-x-5">
                <p className="text-green300">Payment success via</p>
                <p className="text-green300 font-fontWeight6">
                  Credit Card - *888
                </p>
              </div>
              <div>
                <div className="flex justify-between mb-5">
                  <p className="body1 text-green300">
                    {bookingInfo.room.roomType}
                  </p>
                  <p className="text-body1 text-utilWhite">
                    {bookingInfo.room.roomPrice}
                  </p>
                </div>
                <div className="flex justify-between mb-5">
                  <p className="body1 text-green300">Airport transter</p>
                  <p className="text-body1 text-utilWhite">200</p>
                </div>
                <hr></hr>
                <div className="flex justify-between mt-5">
                  <p className="body1 text-green300">Total</p>
                  <p className="headline text-utilWhite">THB 2,700.00</p>
                </div>
              </div>
            </section>

            <section className="flex justify-center mt-10 gap-x-10">
              <button className="text-body1 font-fontWeight6 text-orange500 pb-4">
                Check Booking Detail
              </button>
              <button
                className="btn w-1/4  bg-orange600 hover:bg-orange500 active:bg-orange700 text-body1 text-utilWhite font-fontWeight6 mb-4"
                onClick={() => navigate("/hotel")}
              >
                Back to Home
              </button>
            </section>
          </section>
        </main>
      </>
    );
  }
}

export default PaymentResultPage;

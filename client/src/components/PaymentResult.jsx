import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../components/hooks/useAuth";
import dateFormat from "../utils/dateFormat";
import { auth } from "../config/firebase-config";

function PaymentResult() {
  const navigate = useNavigate();
  const { isAuthenticated, userData } = useAuth();
  const [Loading, setLoading] = useState(false);
  const [bookingDetail, setBookingDetail] = useState({});
  const [simplifiedRequests, setSimplifiedRequests] = useState([]);

  console.log(userData);
  console.log(bookingDetail);
  console.log(simplifiedRequests);

  useEffect(() => {
    if (userData) {
      getRecentBooking();
    }
  }, [userData]);

  const getRecentBooking = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:4000/booking/recent-booking/${userData.userId}`
      );
      // console.log(result.data);

      const bookingDetail = result.data;

      setBookingDetail(result.data);
      console.log(bookingDetail);

      const newSimplifiedRequests = bookingDetail.guestRequest.map(
        (request) => {
          return {
            name: request.request.requestName,
            price: request.request.requestPrice,
            type: request.request.requestType,
          };
        }
      );

      setSimplifiedRequests(newSimplifiedRequests);

      if (!bookingDetail) {
        return <div>Loading</div>;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // format date part vvv

  const formattedCheckIn = dateFormat(bookingDetail.checkIn);
  const formattedCheckOut = dateFormat(bookingDetail.checkOut);
  const formattedDate = `${formattedCheckIn} - ${formattedCheckOut}`;

  // format date part ^^^

  // check payment method part vvv

  const paymentMethod = bookingDetail.paymentMethod;
  console.log(paymentMethod);

  function checkPaymentMethod() {
    if (paymentMethod === "Cash") {
      return "Cash";
    } else if (paymentMethod === "Credit Card") {
      const creditCardNumber = userData?.userProfile?.cardNumber;
      const lastThreeDigits = creditCardNumber.slice(-3);
      return `Credit Card - *${lastThreeDigits}`;
    }
  }
  const paymentMethodDisplay = checkPaymentMethod(paymentMethod);
  console.log(paymentMethodDisplay);

  // check payment method part ^^^

  return (
    <>
      <main className="flex justify-center items-center pt-12 bg-utilBG">
        <section className="max-w-[738px]">
          <section className="text-center bg-green800 py-9 px-14">
            <h2 className="headline3 text-utilWhite">Thank you for booking</h2>
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
                  {`${bookingDetail?.room?.roomType.guestCapacity} Guests`}
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
                {paymentMethodDisplay}
              </p>
            </div>
            <div>
              <div className="flex justify-between mb-5">
                <p className="body1 text-green300">
                  {bookingDetail?.room?.roomType?.roomTypeName}
                </p>
                <p className="text-body1 text-utilWhite">
                  {bookingDetail?.room?.roomType?.roomPrice}
                </p>
              </div>
              {simplifiedRequests.length > 0 &&
                simplifiedRequests.map((request, index) => (
                  <div key={index} className="flex justify-between mb-5">
                    <p className="body1 text-green300">{request.name}</p>
                    <p className="text-body1 text-utilWhite">{request.price}</p>
                  </div>
                ))}
              <hr></hr>
              <div className="flex justify-between mt-5">
                <p className="body1 text-green300">Total</p>
                <p className="headline text-utilWhite">
                  {bookingDetail.totalPrice}
                </p>
              </div>
            </div>
          </section>

          <section className="flex justify-center mt-10 gap-x-10">
            <button
              className="text-body1 font-fontWeight6 text-orange500 pb-4 cursor-pointer"
              onClick={() =>
                navigate(`/users/booking-history/${auth.currentUser.uid}`)
              }
            >
              Check Booking Detail
            </button>
            <button
              className="btn w-1/4  bg-orange600 hover:bg-orange500 active:bg-orange700 text-body1 text-utilWhite font-fontWeight6 mb-4 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </section>
        </section>
      </main>
    </>
  );
}

export default PaymentResult;

import { bookingDetail } from "../../data/rooms.js";
import { Link } from "react-router-dom";

let bookingDetailArray = bookingDetail[0];

function BookingCancel() {
  return (
    <>
      <div className="p-20 mt-16">
        <h1 className="headline2 text-utilBlack font-['noto-serif'] w-1/2 mx-44">
          Cancel Booking
        </h1>
        <div className="w-3/4 h-[400px] mt-16 mx-44 font-inter">
          <div className="flex justify-between gap-12">
            <div className="w-[500px] h-[200px]">
              <img src={bookingDetailArray.photo} alt="" className="w-full h-full rounded-md"/>
            </div>
            <div className="w-full flex flex-col">
              <div className="flex justify-between">
                <span className="headline4 text-utilBlack font-fontWeight6">
                  {bookingDetailArray.room_type}
                </span>
                <span className="text-gray600 font-fontWeight4">
                  Booking date: {bookingDetailArray.created_at}
                </span>
              </div>
              <div className="flex justify-between">
                <div className="my-10">
                  <span className="text-gray700 font-fontWeight4">
                    Th, 19 Oct 2022
                  </span>
                  <span className="text-gray700 font-fontWeight4">
                    - Fri, 20 Oct 2022 <br /> 2 Guests
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
            <Link to="/users/booking-history" className="text-orange500 px-2">Cancel</Link>
            <div>
              <Link to="/users/booking-history/cancel-success/:id" className="py-4 px-8 bg-orange600 text-utilWhite rounded-md">
                Cancel this Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingCancel;

import { bookingDetail } from "../../data/rooms.js";
import { Link } from "react-router-dom";

let bookingDetailArray = [...bookingDetail];

function BookingHistory() {

  return (
    <>
      <div className="p-20 mt-16">
        <h1 className="headline2 text-utilBlack font-['noto-serif'] mx-44">
          Booking History
        </h1>
        <div className="border mt-16 mx-44">
          {bookingDetailArray.map((item, index) => {
            return (
              <div key={index} className="py-10 bg-gray300">
                <div className="flex gap-12">
                  <div className="w-[500px] h-[200px]">
                    <img
                      src={item.photo}
                      alt=""
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-between pb-4">
                    <div className="flex justify-between font-inter">
                      <span className="headline4 text-utilBlack">
                        {item.room_type}
                      </span>
                      <span className="text-gray600">
                        Booking date: {item.created_at}
                      </span>
                    </div>
                    <div className="flex gap-12 text-gray800 w-full font-inter my-6">
                      <div>
                        <p className="font-fontWeight6">Check-in</p>
                        <span className="font-fontWeight4 mr-2">
                          {item.check_in}
                        </span>{" "}
                        |
                        <span className="font-fontWeight4 ml-2">
                          After 2:00 PM
                        </span>
                      </div>
                      <div>
                        <p className="font-fontWeight6">Check-out</p>
                        <span className="font-fontWeight4 mr-2">
                          {item.check_out}
                        </span>{" "}
                        |
                        <span className="font-fontWeight4 ml-2">
                          Before 2:00 PM
                        </span>
                      </div>
                    </div>
                    <div className="collapse collapse-arrow bg-gray200 text-orange500 font-sans font-fontWeight6">
                      <input type="radio" name="roomDetail" />
                      <div className="collapse-title">
                        <p className="text-gray900 my-2 mx-4">Booking Detail</p>
                      </div>
                      <div className="collapse-content text-gray700 font-inter font-fontWeight4">
                        <p className="flex justify-between w-full pb-6">
                          {item.guest_number} Guests (1 Night)
                          <span>
                            Payment success via
                            <span className="pl-2 font-fontWeight6">
                              {item.payment_method}
                            </span>
                          </span>
                        </p>
                        <p className="flex justify-between w-full py-2">
                          {item.room_type}
                          <span className="pl-2 text-gray900 font-fontWeight6">
                            {item.room_price}
                          </span>
                        </p>
                        {item.guest_request.request_id.map((req, index) => {
                          return (
                            <p
                              key={index}
                              className="flex justify-between w-full py-2 "
                            >
                              {req.request_name}
                              <span className="pl-2 text-gray900 font-fontWeight6">
                                {req.request_price}
                              </span>
                            </p>
                          );
                        })}
                        <p className="flex justify-between w-full py-2">
                          Promotion Code
                          <span className="pl-2 text-gray900 font-fontWeight6">
                            -400
                          </span>
                        </p>
                        <p className="flex justify-between w-full py-2">
                          Total
                          <span className="headline5 pl-2 text-gray900 font-fontWeight6">
                            THB {item.total_price}
                          </span>
                        </p>
                        <div className="py-4 px-6">
                          <p className=" text-gray900 font-fontWeight6">
                            Additional Request
                          </p>
                          <p className="font-fontWeight4">
                            {item.additional_request}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between font-sans font-fontWeight6">
                  <button
                    className="text-orange500 px-2"
                    onClick={() =>
                      document.getElementById("modelCancelAndRefund").showModal()
                    }
                  >
                    Cancel Booking
                  </button>
                  <div>
                    <button className="py-4 px-8 text-orange500">
                      Room Detail
                    </button>
                    <Link
                      to="/users/booking-history/change-date/:id"
                      className="py-4 px-8 bg-orange600 text-utilWhite rounded-md"
                    >
                      Change Date
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <dialog id="modelCancelAndRefund" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray500">
                ✕
              </button>
            </form>
            <h3 className="headline5 text-black font-inter">Cancel Booking</h3>
            <p className="py-4 body2">
              Are you sure you would like to cancel this booking?
            </p>
            <div className="flex gap-4 body3 w-full font-sans">
              <Link to="/users/booking-history/refund/:id" className="py-4 px-4 border border-orange500 bg-white rounded-md text-orange500 w-3/5">
                Yes, I want to cancel and request refund
              </Link>
              <form method="dialog" className="w-2/5">
                <button className="py-4 px-2 bg-orange500 rounded-md text-white w-full">
                  No, Don’t Cancel
                </button>
              </form>
            </div>
          </div>
        </dialog>
        {/* <dialog id="modelCancel" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray500">
                ✕
              </button>
            </form>
            <h3 className="headline5 text-black font-inter">Cancel Booking</h3>
            <p className="py-4 body2">
              Cancellation of the booking now will not be able to request a refund. <br/>
              Are you sure you would like to cancel this booking?
            </p>
            <div className="flex gap-4 body3 w-full font-sans">
              <Link to="/users/booking-history/cancel/:id" className="py-4 px-2 border border-orange500 bg-white rounded-md text-orange500 w-3/5">
                Yes, I want to cancel
              </Link>
              <form method="dialog" className="w-2/5">
                <button className="py-4 px-2 bg-orange500 rounded-md text-white w-full">
                  No, Don’t Cancel
                </button>
              </form>
            </div>
          </div>
        </dialog> */}
      </div>
    </>
  );
}

export default BookingHistory;

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookingChangeDate() {
  const [booking, setBooking] = useState({});

  const params = useParams();

  async function getBooking () {
    const resultBooking = await axios.get("http://localhost:4000/booking/" + params.userId);
    console.log(resultBooking);
  }

  useEffect (() => {
    getBooking();
  }, [])
  
  return (
    <>
      <div className="p-20 mt-16">
        <h1 className="headline2 text-utilBlack font-['noto-serif'] w-1/2 mx-44">
          Change Check-in <br /> and Check-out Date
        </h1>
        <div className="w-3/4 h-[450px] mt-16 mx-44 bg-gray300 font-inter">
          <div className="flex justify-between gap-12">
            <div className="w-[500px] h-[200px]">
              <img
                src={booking.photo}
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex justify-between">
                <span className="headline4 text-utilBlack font-fontWeight6">
                  {booking.room_type}
                </span>
                <span className="text-gray600 font-fontWeight4">
                  Booking date: {booking.created_at}
                </span>
              </div>
              <div className="my-8">
                <p className="text-gray800 font-fontWeight6">Original Date</p>
                <span className="text-gray700 font-fontWeight4">
                  Th, 19 Oct 2022
                </span>
                <span className="text-gray700 font-fontWeight4">
                  - Fri, 20 Oct 2022
                </span>
              </div>
              <div>
                <p className="text-gray800 font-fontWeight6 mx-6 mt-6">
                  Change Date
                </p>
                <div className="flex items-center gap-12 my-4 mx-6 text-gray900">
                  <div className="w-1/2">
                    <p className="font-fontWeight4 mb-4">Check-in</p>
                    <input
                      type="date"
                      className="font-fontWeight4 bg-gray400 w-full mx-4"
                    />
                  </div>
                  <span>-</span>
                  <div className="w-1/2">
                    <p className="font-fontWeight4 mb-4">Check-out</p>
                    <input
                      type="date"
                      className="font-fontWeight4 bg-gray400 w-full mx-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between font-sans font-fontWeight6 my-10">
            <Link to="/users/booking-history" className="text-orange500 px-2">
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
              Are you sure you want to change your check-in and check-out date?
            </p>
            <div className="flex justify-end gap-4 body3 w-full font-sans">
              <form method="dialog" className="w-1/4">
                <button className="py-4 px-2 w-full border border-orange500 bg-white rounded-md text-orange500">
                  No, I don’t
                </button>
              </form>
              <button className="py-4 px-2 w-2/5 bg-orange500 rounded-md text-white ">
                Yes, I want to change
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default BookingChangeDate;

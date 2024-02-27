import { useState, useEffect } from "react";
import dateFormat from "../../utils/dateFormat";
import { useSearchInput } from "../context/searchInputContext";
import { useRoomDetail } from "../../pages/PaymentPage";

export default function BookingDetail({ requestCheckboxValue }) {  
  const [userSelectedRequest, setUserSelectedRequest] = useState([]);
  const { roomDetailFromDB } = useRoomDetail()
  const { searchInput } = useSearchInput() 

  const requestLabels = {
      earlyCheckIn: { title: "Early check-in", price: 0 },
      lateCheckOut: { title: "Late check-out", price: 0 },
      nonSmokeRoom: { title: "Non-smoking room", price: 0 },
      highFloor: { title: "A room on the high floor", price: 0 },
      quietRoom: { title: "A quiet room", price: 0 },
      babyCot: { title: "Baby cot", price: 400 },
      airportTransfer: { title: "Airport transfer", price: 200 },
      extraBed: { title: "Extra bed", price: 500 },
      extraPillow: { title: "Extra pillow", price: 100 },
      phoneCharger: { title: "Phone charger", price: 100 },
      breakfast: { title: "Breakfast", price: 150 },
  };

  function filterUserRequest() {
    const selectedRequest = [];
    for (const key in requestCheckboxValue) {
      if (requestCheckboxValue[key] === true) {
        const requestDetail = requestLabels[key];
        selectedRequest.push(requestDetail);
      }
    }
    setUserSelectedRequest(selectedRequest);
  }

  const userRequestEl = userSelectedRequest.map((request, index) => {
    return (
      <div key={index} className="mb-4 flex justify-between">
        <p className="text-white">{`${request.title}`}</p>
        <p className="text-white">{`${request.price}.00`}</p>
      </div>
    );
  });

  const totalPrice = userSelectedRequest.reduce((acc, request) => {
    return acc + request.price;
  }, roomDetailFromDB.roomPrice);

  useEffect(() => {
    filterUserRequest();
  }, [requestCheckboxValue]);

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#4A5B51] rounded-md flex flex-col gap-4">
        <h3 className="p-4 bg-[#323D36] text-white text-[1.125rem] font-semibold rounded-t-md">
          Booking Detail
        </h3>
        {/* TODO : change check in time when early check in or check out value change */}
        <div className="flex justify-between gap-4">
          <div className="mx-4 mb-6">
            <p className="text-white font-inter font-semibold">
              Check-in
            </p>
            <p className="text-white font-inter">
              {requestCheckboxValue.earlyCheckIn === true ? "After 12.00AM" : "After 2:00PM"}
            </p>
          </div>
          <div className="mx-4 mb-6">
            <p className="text-white font-inter font-semibold">
              Check-out
            </p>
            <p className="text-white font-inter">
            {requestCheckboxValue.lateCheckOut === true ? "Before  2.00PM" : "Before 12:00PM"}
            </p>
          </div>
        </div>
        <div className="mx-4 mb-6">
          <p className="text-white font-inter">
            {`${dateFormat(searchInput.checkIn)} - ${dateFormat(searchInput.checkOut)}`}
          </p>
          <p className="text-white font-inter">
            2 Guests
          </p>
        </div>
        <div className="mx-4">
          <div className="mb-6 flex justify-between">
            <p className="text-white font-inter">
              {roomDetailFromDB.roomTypeName}
            </p>
            <p className="text-white font-inter font-semibold">
              {roomDetailFromDB.roomPrice}
            </p>
          </div>
          {userRequestEl}
          <hr className="mb-8" />
          <div className="mb-8 flex justify-between items-center ">
            <p className="text-white font-inter">Total</p>
            <p className="text-white font-inter">{`THB ${totalPrice}.00`}</p>
          </div>
        </div>
      </div>
      <ul className="max-w-[400px] bg-gray300 rounded-md p-6 flex flex-col gap-4">
        <li className="text-green600 font-semibold">
          Cancel booking will get full refund if the cancelation occurs before
          24 hours of the check-in date.
        </li>
        <li className="text-green600 font-semibold">
          Able to change check-in or check-out date booking within 24 hours of
          the booking date
        </li>
      </ul>
    </div>
  );
}

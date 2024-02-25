import { useState, useEffect } from "react";

export default function BookingDetail({ requestCheckboxValue }) {
  const [userSelectedRequest, setUserSelectedRequest] = useState([]);

  const requestLabels = {
    standard: {
      earlyCheckIn: { title: "Early check-in", price: 0 },
      lateCheckOut: { title: "Late check-out", price: 0 },
      nonSmokeRoom: { title: "Non-smoking room", price: 0 },
      highFloor: { title: "A room on the high floor", price: 0 },
      quietRoom: { title: "A quiet room", price: 0 },
    },
    special: {
      babyCot: { title: "Baby cot", price: 400 },
      airportTransfer: { title: "Airport transfer", price: 200 },
      extraBed: { title: "Extra bed", price: 500 },
      extraPillow: { title: "Extra pillow", price: 100 },
      phoneCharger: { title: "Phone charger", price: 100 },
      breakfast: { title: "Breakfast", price: 150 },
    },
  };

  function filterUserRequest() {
    const selectedRequest = [];
    for (const category in requestCheckboxValue) {
      for (const key in requestCheckboxValue[category]) {
        if (requestCheckboxValue[category][key] === true) {
          const requestDetail = requestLabels[category][key];
          selectedRequest.push(requestDetail);
        }
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
  }, 2500);

  useEffect(() => {
    filterUserRequest();
  }, [requestCheckboxValue]);

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#4A5B51] rounded-md flex flex-col gap-4">
        <h3 className="p-4 bg-[#323D36] text-white text-[1.125rem] font-semibold rounded-t-md">
          Booking Detail
        </h3>
        <div className="flex justify-between gap-4">
          <div className="mx-4 mb-6">
            <p className="text-white font-inter font-semibold">Check-in</p>
            <p className="text-white font-inter">After 2:00 PM</p>
          </div>
          <div className="mx-4 mb-6">
            <p className="text-white font-inter font-semibold">Check-out</p>
            <p className="text-white font-inter">Before 12:00 PM</p>
          </div>
        </div>
        <div className="mx-4 mb-6">
          <p className="text-white font-inter">
            Th, 19 Oct 2022 - Fri, 20 Oct 2022
          </p>
          <p className="text-white font-inter">2 Guests</p>
        </div>
        <div className="mx-4">
          <div className="mb-6 flex justify-between">
            <p className="text-white font-inter">Superior Garden View Room</p>
            <p className="text-white font-inter font-semibold">2,500.00</p>
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

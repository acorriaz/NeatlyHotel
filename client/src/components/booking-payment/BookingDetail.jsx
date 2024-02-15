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
      breakfast: { title: "Breakfast", price: 100 },
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
      <div key={index}>
        <p>{request.title}</p>
        <p>{request.price}</p>
      </div>
    );
  });

  const totalPrice = userSelectedRequest.reduce((acc, request) => {
    return acc + request.price;
  }, 0);

  useEffect(() => {
    filterUserRequest();
  }, [requestCheckboxValue]);

  return (
    <div className="flex flex-col">
      <div>
        <h3>Booking Detail</h3>
        <div>
          <div>
            <p>Check-in</p>
            <p>After 2:00 PM</p>
          </div>
          <div>
            <p>Check-out</p>
            <p>Before 12:00 PM</p>
          </div>
        </div>
        <div>
          <p>Th, 19 Oct 2022 - Fri, 20 Oct 2022</p>
          <p>2 Guests</p>
        </div>
        <div>
          <p>Rooms</p>
          <p>2,500.00</p>
        </div>
        {userRequestEl}
        <div>
          <p>Total price</p>
          <p>{totalPrice}</p>
        </div>
      </div>
      <ul className="max-w-[400px]">
        <li>
          Cancel booking will get full refund if the cancelation occurs before
          24 hours of the check-in date.
        </li>
        <li>
          Able to change check-in or check-out date booking within 24 hours of
          the booking date
        </li>
      </ul>
    </div>
  );
}

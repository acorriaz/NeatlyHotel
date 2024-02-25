import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentBasicInfo from "./PaymentBasicInfo";
import BookingDetail from "./BookingDetail";
import PaymentSpecialReq from "./PaymentSpecialReq";
import PaymentMethod from "./PaymentMethod";

export default function PaymentSection({
  currentSection,
  handleSectionChange,
}) {
  const navigate = useNavigate();
  const [requestCheckboxValue, setRequestCheckboxValue] = useState({
    standard: {
      earlyCheckIn: false,
      lateCheckOut: false,
      nonSmokeRoom: false,
      highFloor: false,
      quietRoom: false,
    },
    special: {
      babyCot: false,
      airportTransfer: false,
      extraBed: false,
      extraPillow: false,
      phoneCharger: false,
      breakfast: false,
    },
  });

  function handleCheckboxChange(event, type) {
    const { name, checked } = event.target;
    setRequestCheckboxValue((prevRequest) => {
      return {
        ...prevRequest,
        [type]: {
          ...prevRequest[type],
          [name]: checked,
        },
      };
    });
  }

  return (
    <div className="m-auto mt-6 w-[1120px] flex justify-between gap-4">
      <div className="bg-white rounded-md flex-1 p-8 w-full">
        {currentSection === 1 && <PaymentBasicInfo />}
        {currentSection === 2 && (
          <PaymentSpecialReq
            requestCheckboxValue={requestCheckboxValue}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}
        {currentSection === 3 && <PaymentMethod />}
        <div className="mt-8 flex justify-between">
          <button
            className="font-medium text-orange500"
            onClick={() => handleSectionChange("back")}
          >
            Back
          </button>
          {currentSection === 1 && (
            <button
              className="px-8 py-2 font-sans font-semibold text-white bg-orange500 rounded-md"
              onClick={() => handleSectionChange("next")}
            >
              Next
            </button>
          )}
          {currentSection === 2 && (
            <button
              className="px-8 py-2 font-sans font-semibold text-white bg-orange500 rounded-md"
              onClick={() => handleSectionChange("next")}
            >
              Next
            </button>
          )}
          {currentSection === 3 && (
            <button
              className="px-8 py-2 font-sans font-semibold text-white bg-orange500 rounded-md"
              // TODO : add payment gateway and confirm booking
              onClick={() => navigate("/users/payment-result")}
            >
              Confirm Booking
            </button>
          )}
        </div>
      </div>
      <BookingDetail requestCheckboxValue={requestCheckboxValue} />
    </div>
  );
}

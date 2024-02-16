import { useState } from "react";
import PaymentBasicInfo from "./PaymentBasicInfo";
import BookingDetail from "./BookingDetail";
import PaymentSpecialReq from "./PaymentSpecialReq";

export default function PaymentSection(props) {
  const [currentSection, setCurrentSection] = useState(1);
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

  function handleSectionChange(buttonType) {
    if (buttonType === "next") {
      setCurrentSection((prev) => prev + 1);
    } else if (buttonType === "back") {
      if (currentSection === 1) {
        // TODO (optional) : Modal popup Do you want to cancel the booking?
        return;
      } else {
        setCurrentSection((prev) => prev - 1);
      }
    }
  }

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
    <div className="m-auto p-8 w-[1120px] bg-white flex justify-center">
      <div>
        {currentSection === 1 && <PaymentBasicInfo />}
        {currentSection === 2 && (
          <PaymentSpecialReq
            requestCheckboxValue={requestCheckboxValue}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}
        {currentSection === 3 && <h1>Payment</h1>}
        <button onClick={() => handleSectionChange("back")}>back</button>
        <button onClick={() => handleSectionChange("next")}>next</button>
      </div>
      <BookingDetail requestCheckboxValue={requestCheckboxValue} />
    </div>
  );
}

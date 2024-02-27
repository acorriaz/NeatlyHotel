export default function PaymentSpecialReq({ 
  requestCheckboxValue, handleCheckboxChange, 
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h3 className="text-gray600 font-inter font-semibold text-[1.125rem]">
            Standard Request
          </h3>
          <p className="text-gray600 text-[0.875rem]">
            These requests are not confirmed (Depend on the available room)
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex gap-4">
            <input
              type="checkbox"
              name="earlyCheckIn"
              checked={requestCheckboxValue.earlyCheckIn}
              className="w-6 h-6 rounded-md"
              onChange={(e) => handleCheckboxChange(e)}
            />
            Early check-in
          </label>
          <label className="flex gap-4">
            <input
              type="checkbox"
              name="lateCheckOut"
              checked={requestCheckboxValue.lateCheckOut}
              className="w-6 h-6 rounded-md"
              onChange={(e) => handleCheckboxChange(e)}
            />
            Late check-out
          </label>
          <label className="flex gap-4">
            <input
              type="checkbox"
              name="nonSmokeRoom"
              checked={requestCheckboxValue.nonSmokeRoom}
              className="w-6 h-6 rounded-md"
              onChange={(e) => handleCheckboxChange(e)}
            />
            Non-smoking room
          </label>
          <label className="flex gap-4">
            <input
              type="checkbox"
              name="highFloor"
              checked={requestCheckboxValue.highFloor}
              className="w-6 h-6 rounded-md"
              onChange={(e) => handleCheckboxChange(e)}
            />
            A room on the high floor
          </label>
          <label className="flex gap-4">
            <input
              type="checkbox"
              name="quietRoom"
              checked={requestCheckboxValue.quietRoom}
              className="w-6 h-6 rounded-md"
              onChange={(e) => handleCheckboxChange(e)}
            />
            A quiet room
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="text-gray600 font-inter font-semibold text-[1.125rem]">
              Special Request
            </h3>
            <p className="text-gray600 text-[0.875rem]">
              Additional charge may apply
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="babyCot"
                checked={requestCheckboxValue.babyCot}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e)}
              />
              Baby cot (+THB 400)
            </label>
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="airportTransfer"
                checked={requestCheckboxValue.airportTransfer}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e)}
              />
              Airport transfer (+THB 200)
            </label>
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="extraBed"
                checked={requestCheckboxValue.extraBed}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e)}
              />
              Extra bed (+THB 500)
            </label>
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="extraPillow"
                checked={requestCheckboxValue.extraPillow}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e)}
              />
              Extra pillows (+THB 100)
            </label>
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="phoneCharger"
                checked={requestCheckboxValue.phoneCharger}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e)}
              />
              Phone chargers and adapters (+THB 100)
            </label>
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="breakfast"
                checked={requestCheckboxValue.breakfast}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e)}
              />
              Breakfast (+THB 150)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

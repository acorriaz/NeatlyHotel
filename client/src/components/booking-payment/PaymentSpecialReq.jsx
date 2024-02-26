export default function PaymentSpecialReq({
  requestCheckboxValue,
  handleCheckboxChange,
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
              checked={requestCheckboxValue.standard.earlyCheckIn}
              className="w-6 h-6 rounded-md"
              onChange={(e) => handleCheckboxChange(e, "standard")}
            />
            Early check-in
          </label>
          <label className="flex gap-4">
            <input
              type="checkbox"
              name="lateCheckOut"
              checked={requestCheckboxValue.standard.lateCheckOut}
              className="w-6 h-6 rounded-md"
              onChange={(e) => handleCheckboxChange(e, "standard")}
            />
            Late check-out
          </label>
          <label className="flex gap-4">
            <input
              type="checkbox"
              name="nonSmokeRoom"
              checked={requestCheckboxValue.standard.nonSmokeRoom}
              className="w-6 h-6 rounded-md"
              onChange={(e) => handleCheckboxChange(e, "standard")}
            />
            Non-smoking room
          </label>
          <label className="flex gap-4">
            <input
              type="checkbox"
              name="highFloor"
              checked={requestCheckboxValue.standard.highFloor}
              className="w-6 h-6 rounded-md"
              onChange={(e) => handleCheckboxChange(e, "standard")}
            />
            A room on the high floor
          </label>
          <label className="flex gap-4">
            <input
              type="checkbox"
              name="quietRoom"
              checked={requestCheckboxValue.standard.quietRoom}
              className="w-6 h-6 rounded-md"
              onChange={(e) => handleCheckboxChange(e, "standard")}
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
                checked={requestCheckboxValue.special.babyCot}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e, "special")}
              />
              Baby cot (+THB 400)
            </label>
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="airportTransfer"
                checked={requestCheckboxValue.special.airportTransfer}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e, "special")}
              />
              Airport transfer (+THB 200)
            </label>
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="extraBed"
                checked={requestCheckboxValue.special.extraBed}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e, "special")}
              />
              Extra bed (+THB 500)
            </label>
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="extraPillow"
                checked={requestCheckboxValue.special.extraPillow}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e, "special")}
              />
              Extra pillows (+THB 100)
            </label>
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="phoneCharger"
                checked={requestCheckboxValue.special.phoneCharger}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e, "special")}
              />
              Phone chargers and adapters (+THB 100)
            </label>
            <label className="flex gap-4">
              <input
                type="checkbox"
                name="breakfast"
                checked={requestCheckboxValue.special.breakfast}
                className="w-6 h-6 rounded-md"
                onChange={(e) => handleCheckboxChange(e, "special")}
              />
              Breakfast (+THB 150)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

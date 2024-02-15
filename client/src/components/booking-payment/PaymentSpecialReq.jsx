export default function PaymentSpecialReq({
  requestCheckboxValue,
  handleCheckboxChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h3>Standard Request</h3>
        <p>These requests are not confirmed (Depend on the available room)</p>
        <div>
          <label>
            <input
              type="checkbox"
              name="earlyCheckIn"
              checked={requestCheckboxValue.standard.earlyCheckIn}
              onChange={(e) => handleCheckboxChange(e, "standard")}
            />
            Early check-in
          </label>
          <label>
            <input
              type="checkbox"
              name="lateCheckOut"
              checked={requestCheckboxValue.standard.lateCheckOut}
              onChange={(e) => handleCheckboxChange(e, "standard")}
            />
            Late check-out
          </label>
          <label>
            <input
              type="checkbox"
              name="nonSmokeRoom"
              checked={requestCheckboxValue.standard.nonSmokeRoom}
              onChange={(e) => handleCheckboxChange(e, "standard")}
            />
            Non-smoking room
          </label>
          <label>
            <input
              type="checkbox"
              name="highFloor"
              checked={requestCheckboxValue.standard.highFloor}
              onChange={(e) => handleCheckboxChange(e, "standard")}
            />
            A room on the high floor
          </label>
          <label>
            <input
              type="checkbox"
              name="quietRoom"
              checked={requestCheckboxValue.standard.quietRoom}
              onChange={(e) => handleCheckboxChange(e, "standard")}
            />
            A quiet room
          </label>
        </div>
        <div>
          <h3>Special Request</h3>
          <p>These Additional charge may apply</p>
          <label>
            <input
              type="checkbox"
              name="babyCot"
              checked={requestCheckboxValue.special.babyCot}
              onChange={(e) => handleCheckboxChange(e, "special")}
            />
            Baby cot (+THB 400)
          </label>
          <label>
            <input
              type="checkbox"
              name="airportTransfer"
              checked={requestCheckboxValue.special.airportTransfer}
              onChange={(e) => handleCheckboxChange(e, "special")}
            />
            Airport transfer (+THB 200)
          </label>
          <label>
            <input
              type="checkbox"
              name="extraBed"
              checked={requestCheckboxValue.special.extraBed}
              onChange={(e) => handleCheckboxChange(e, "special")}
            />
            Extra bed (+THB 500)
          </label>
          <label>
            <input
              type="checkbox"
              name="extraPillow"
              checked={requestCheckboxValue.special.extraPillow}
              onChange={(e) => handleCheckboxChange(e, "special")}
            />
            Extra pillows (+THB 100)
          </label>
          <label>
            <input
              type="checkbox"
              name="phoneCharger"
              checked={requestCheckboxValue.special.phoneCharger}
              onChange={(e) => handleCheckboxChange(e, "special")}
            />
            Phone chargers and adapters (+THB 100)
          </label>
          <label>
            <input
              type="checkbox"
              name="breakfast"
              checked={requestCheckboxValue.special.breakfast}
              onChange={(e) => handleCheckboxChange(e, "special")}
            />
            Phone chargers and adapters (+THB 100)
          </label>
        </div>
      </div>
    </div>
  );
}

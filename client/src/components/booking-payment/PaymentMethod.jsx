import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function PaymentMethod() {
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const { userData } = useAuth();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between gap-4">
        <h2 className="flex-1 py-6 text-center border-gray500 border-[1px] rounded-md">
          Credit Card
        </h2>
        <h2 className="flex-1 py-6 text-center border-gray500 border-[1px] rounded-md">
          Cash
        </h2>
      </div>
      <h2 className="font-inter font-semibold text-xl text-gray600">
        Credit Card Information
      </h2>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="creditCardNum">Card Number</label>
          <input
            type="text"
            id="creditCardNum"
            name="creditCardNum"
            value={userData.card.cardNumber}
            className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cardOwner">Card Owner</label>
          <input
            type="text"
            id="cardOwner"
            name="cardOwner"
            value={userData.fullName}
            readOnly={true}
            className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-"
            required
          />
        </div>
        <div className="flex justify-between items-center gap-6">
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="expDate">Expiry Date</label>
            <input
              type="text"
              id="expDate"
              name="expDate"
              value={expiryDate}
              placeholder="MM/YY"
              pattern="[0-9]{2}/[0-9]{2}"
              maxLength={5}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-"
              required
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="cvv">CVC/CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cvc}
              placeholder="123"
              pattern="[0-9]{3}"
              maxLength="3"
              onChange={(e) => setCvc(e.target.value)}
              className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}

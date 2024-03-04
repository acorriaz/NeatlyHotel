import { useAuth } from "../hooks/useAuth";
import { useRoomDetail } from "../../pages/PaymentPage";

export default function PaymentMethod() {
  const { userData } = useAuth();
  const { userPaymentDetail, handleUserPaymentDetail } = useRoomDetail()

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
            id="cardNumber"
            name="cardNumber"
            value={userPaymentDetail.cardNumber}
            onChange={(e) => handleUserPaymentDetail(e)}
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
            value={userPaymentDetail.cardOwner}
            onChange={(e) => handleUserPaymentDetail(e)}
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
              value={userPaymentDetail.cardExpiry}
              placeholder="MM/YY"
              pattern="[0-9]{2}/[0-9]{2}"
              maxLength={5}
              onChange={(e) => handleUserPaymentDetail(e)}
              className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-"
              required
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="cvc">CVC/CVV</label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              value={userPaymentDetail.cvc}
              placeholder="123"
              pattern="[0-9]{3}"
              onChange={(e) => handleUserPaymentDetail(e)}
              maxLength="3"
              className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}

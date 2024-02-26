import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth.jsx";
import { useEffect } from "react";
import {
  inputErrorBorder,
  inputErrorIcon,
} from "../utils/InputErrorStyles.jsx";
import axios from "axios";

function EditUserPayment() {
  const { isAuthenticated, userData } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cardNumber: "",
      cardOwner: "",
      cardExpiry: "",
    },
  });
  console.log(userData);

  const onSubmit = async (data) => {
    try {
      const updatePaymentMethod = await axios.put(
        `http://localhost:4000/users/payment-update/${userData.userId}`,
        {
          cardNumber: data.cardNumber,
          cardOwner: data.cardOwner,
          cardExpiry: data.cardExpiry,
        }
      );
      alert("Update payment method successfully!", updatePaymentMethod);
    } catch (error) {
      console.error(error);
      alert(error.message);
      return;
    }
  };

  useEffect(() => {
    if (isAuthenticated && userData) {
      reset({
        cardNumber: userData?.userProfile?.cardNumber || "",
        cardOwner: userData?.userProfile?.cardOwner || "",
        cardExpiry: userData?.userProfile?.cardExpiry || "",
      });
    }
  }, [isAuthenticated, userData, reset]);

  return (
    <>
      <main className="flex justify-center h-screen bg-utilBG">
        <section className="bg-utilBG w-8/12 mt-36 mb-10 text-left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="flex justify-between items-center">
              <h1 className="headline2 text-green800">Payment Method</h1>
              <button
                type="submit"
                className="btn w-fit px-10 border-none  bg-orange600 hover:bg-orange500 active:bg-orange700 text-body1 text-utilWhite font-fontWeight6 cursor-pointer"
              >
                Update Payment Method
              </button>
            </section>
            <h2 className="headline5 text-gray600 mt-20">Credit Card</h2>

            <div className="grid grid-cols-2 gap-10 mt-10">
              <div className="relative">
                <label htmlFor="cardNumber" className="body1 text-gray900">
                  Card Number
                </label>
                <br></br>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="Enter your card number"
                  inputMode="numeric"
                  maxLength={16}
                  minLength={16}
                  className={inputErrorBorder(errors, "cardNumber")}
                  {...register("cardNumber", {
                    required: "Card Number is required",
                    pattern: {
                      value: /^\d{16}$/,
                      message: "Card number must be 16 digits",
                    },
                  })}
                />
                {inputErrorIcon(errors, "cardNumber")}
              </div>
              <div className="relative">
                <label htmlFor="cardOwner" className="body1 text-gray900">
                  Card Owner
                </label>
                <br></br>
                <input
                  id="cardOwner"
                  name="cardOwner"
                  type="text"
                  placeholder="Enter your card name"
                  className={inputErrorBorder(errors, "cardOwner")}
                  {...register("cardOwner", {
                    required: "Card Owner is required",
                  })}
                />
                {inputErrorIcon(errors, "cardOwner")}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-5">
              <div className="relative">
                <label htmlFor="cardExpiry" className="body1 text-gray900">
                  Expiry Date
                </label>
                <br></br>
                <input
                  id="cardExpiry"
                  name="cardExpiry"
                  type="tel"
                  maxLength={5}
                  inputMode="numeric"
                  placeholder="MM / YY"
                  className={inputErrorBorder(errors, "cardExpiry")}
                  {...register("cardExpiry", {
                    required: "Expiry Date is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      message: "Expiry date must be in MM/YY format",
                    },
                  })}
                />
                {inputErrorIcon(errors, "cardExpiry")}
              </div>
              <div></div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default EditUserPayment;

import { useForm, Controller } from "react-hook-form";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { IoAlertCircle, IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import supabase from "../../../server/utils/db";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";

function PaymentPageCard({ token }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/agent-login");
  }

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    let errorMessage = "ERRORRR";

    // auth part
    try {
      const { data: signUpResult, error } = await supabase.auth.updateUser({
        email: formData.email,
        data: {
          card_number: formData.creditCardNo,
          card_owner: formData.cardOwner,
          card_expiry_date: formData.cardExpiry,
          card_cvc_cvv: formData.cvcCvv,
        },
      });

      // Check if the update was successful
      if (error) {
        console.error("Update error", error);
      } else {
        console.log("User updated successfully", signUpResult);
        alert("User updated successfully");
        navigate("/agent-login");
      }
    } catch (error) {
      console.error("Unexpected error", error);
    }
  };

  const inputErrorBorder = (id) => {
    return `w-full bg-utilWhite border rounded py-3 pr-4 pl-3 relative ${
      errors[id]
        ? "border-utilRed"
        : "border-gray400 focus:border-orange500 disabled:bg-gray200 disabled:border-gray400"
    }`;
  };

  const inputErrorIcon = (id) => {
    return (
      errors[id] && (
        <div className="absolute inset-y-0 right-2 top-6 pr-3 flex items-center pointer-events-none text-utilRed">
          <IoAlertCircle />
        </div>
      )
    );
  };

  return (
    <>
      <NavigationBar />
      <section className="bg-register-bg flex justify-center items-center min-h-screen">
        <div className="bg-utilBG max-w-fit px-20 py-10 my-20 text-left">
          <form
            className="flex flex-col items-start justify-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="headline2 text-green800">Payment Method</h1>
            <div className="flex flex-col mt-10">
              {/* --- Credit Card start --- */}
              <div className="flex flex-col pt-10 mt-5">
                <p className="justify-start headline5 text-gray600">
                  Credit Card
                </p>
                <div className="grid grid-cols-2 gap-10 mt-5">
                  <div className="relative">
                    <label htmlFor="creditCardNo" className="body2">
                      Card Number
                    </label>
                    <br></br>
                    <input
                      {...register("creditCardNo", {
                        required: true,
                        pattern: {
                          value: /^\d{16}$/,
                          message: "Card number must be 16 digits",
                        },
                      })}
                      id="creditCardNo"
                      name="creditCardNo"
                      type="text"
                      // credit card no >= 16
                      maxLength={16}
                      minLength={16}
                      inputMode="numeric"
                      defaultValue={token.user.user_metadata.card_number}
                      className={inputErrorBorder("creditCardNo")}
                    />
                    {inputErrorIcon("creditCardNo")}
                  </div>
                  <div className="relative">
                    <label htmlFor="cardOwner" className="body2">
                      Card Owner
                    </label>
                    <br></br>
                    <input
                      {...register("cardOwner", {
                        required: true,
                      })}
                      id="cardOwner"
                      name="cardOwner"
                      type="text"
                      defaultValue={token.user.user_metadata.card_owner}
                      className={inputErrorBorder("cardOwner")}
                    />
                    {inputErrorIcon("cardOwner")}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-10 mt-5">
                  <div className="relative">
                    <label htmlFor="cardExpiry" className="body2">
                      Expiry Date
                    </label>
                    <br></br>
                    <input
                      {...register("cardExpiry", {
                        required: true,
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                          message: "Expiry date must be in MM/YY format",
                        },
                      })}
                      id="cardExpiry"
                      name="cardExpiry"
                      type="tel"
                      maxLength={5}
                      inputMode="numeric"
                      defaultValue={token.user.user_metadata.card_expiry_date}
                      className={inputErrorBorder("cardExpiry")}
                    />
                    {inputErrorIcon("cardExpiry")}
                  </div>
                  <div className="relative">
                    <label htmlFor="cvcCvv" className="body2">
                      CVC/CVV
                    </label>
                    <br></br>
                    <input
                      {...register("cvcCvv", {
                        required: true,
                        pattern: {
                          value: /^\d{3}$/,
                          message: "CVV/CVC must be 3 digits",
                        },
                      })}
                      id="cvcCvv"
                      name="cvcCvv"
                      type="tel"
                      inputMode="numeric"
                      placeholder="Re-enter your CVV/CVC number"
                      maxLength={3}
                      minLength={3}
                      className={inputErrorBorder("cvcCvv")}
                    />
                    {inputErrorIcon("cvcCvv")}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <button
                  className="btn w-full bg-orange600 hover:bg-orange500 active:bg-orange700 text-body1 text-utilWhite font-fontWeight6 mb-4"
                  type="submit"
                >
                  Update Payment Method
                </button>
              </div>
              <div>
                <span className="text-body1 text-gray700">You are signed?</span>{" "}
                <Link
                  to="/hotel/user-login"
                  className=" font-sans font-fontWeight6 text-orange500"
                >
                  Logout,from {token.user.user_metadata.full_name}
                </Link>
              </div>
              <div></div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default PaymentPageCard;

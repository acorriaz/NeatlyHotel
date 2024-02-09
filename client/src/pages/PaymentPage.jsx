import { useForm, Controller } from "react-hook-form";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { IoAlertCircle, IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import supabase from "../../../server/utils/db";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";

function PaymentPage({ token }) {
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

  const onSubmit = async (data) => {
    let errorMessage = "ERRORRR";

    // auth part
    const user = supabase.auth.user();
    try {
      const { data: signUpResult, error } = await supabase.auth.updateUser({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
            username: data.username,
            id_number: data.idNumber,
            date_of_birth: data.dateOfBirth,
            country: data.country,
            card_number: data.creditCardNo,
            card_owner: data.cardOwner,
            card_expiry_date: data.cardExpiry,
            card_cvc_cvv: data.cvcCvv,
          },
        },
      });

      if (signUpResult?.user) {
        const { error: profileError } = await supabase
          .from("users_profile")
          .update({
            full_name: data.fullName,
            username: data.username,
            id_number: data.idNumber,
            date_of_birth: data.dateOfBirth,
            country: data.country,
            card_number: data.creditCardNo,
            card_owner: data.cardOwner,
            card_expiry_date: data.cardExpiry,
            card_cvc_cvv: data.cvcCvv,
          })
          .eq("id", user?.id);

        if (profileError) {
          alert(profileError.message);
          return;
        }

        alert("Updated successful!");
      } else if (error) {
        alert(error.message);
        return;
      }
    } catch (error) {
      alert(error.message);
      return;
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
            <h1 className="headline2 text-green800">
              Hello,{token.user.user_metadata.full_name},
              {token.user.user_metadata.emails}
            </h1>
            <div className="flex flex-col mt-10">
              {/* --- Basic Information start --- */}

              <div className="mt-5 relative">
                <label htmlFor="full_name">Full Name</label>
                <br></br>
                <input
                  {...register("full_name", {
                    required: true,
                  })}
                  id="full_name"
                  name="full_name"
                  type="text"
                  defaultValue={token.user.user_metadata.full_name}
                  className={inputErrorBorder("full_name")}
                />
                {inputErrorIcon("full_name")}
              </div>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <div className="relative">
                  <label htmlFor="username" className="body2">
                    username
                  </label>
                  <br></br>
                  <input
                    {...register("username", {
                      required: true,
                    })}
                    id="username"
                    name="username"
                    type="text"
                    defaultValue={token.user.user_metadata.username}
                    className={inputErrorBorder("username")}
                  />
                  {inputErrorIcon("username")}
                </div>
                <div className="relative">
                  <label htmlFor="email">email</label>
                  <br></br>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    })}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Re-enter your email"
                    className={inputErrorBorder("email")}
                  />
                  {inputErrorIcon("email")}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <div className="relative">
                  <label htmlFor="password" className="body2">
                    password
                  </label>
                  <br></br>
                  <input
                    {...register("password", {
                      required: true,
                    })}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Re enter your password"
                    //password.length >= 12
                    minLength={12}
                    className={inputErrorBorder("password")}
                  />
                  {inputErrorIcon("password")}
                </div>
                <div className="relative">
                  <label htmlFor="idNumber" className="body2">
                    ID Number
                  </label>
                  <br></br>
                  <input
                    {...register("idNumber", {
                      required: true,
                      pattern: {
                        value: /^\d{13}$/,
                        message: "ID Number must be 13 digits",
                      },
                    })}
                    id="idNumber"
                    name="idNumber"
                    type="text"
                    defaultValue={token.user.user_metadata.id_number}
                    inputMode="numeric"
                    maxLength={13}
                    minLength={13}
                    className={inputErrorBorder("idNumber")}
                  />
                  {inputErrorIcon("idNumber")}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 mt-5">
                <div className="relative">
                  <label htmlFor="dateOfBirth" className="body2">
                    Date of Birth
                  </label>
                  <br></br>
                  <input
                    {...register("dateOfBirth", {
                      required: true,
                    })}
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="text"
                    defaultValue={token.user.user_metadata.date_of_birth}
                    className={inputErrorBorder("dateOfBirth")}
                  />
                  {inputErrorIcon("dateOfBirth")}
                </div>

                <div className="relative">
                  <label htmlFor="country" className="body2">
                    Country
                  </label>
                  <br></br>
                  <select
                    {...register("country", {
                      required: true,
                    })}
                    id="country"
                    name="country"
                    className={inputErrorBorder("country")}
                  >
                    <option>{token.user.user_metadata.country}</option>
                    <option value="AF">Afghanistan</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                  {inputErrorIcon("country")}
                </div>
              </div>
              <hr className="mt-10"></hr>
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
                  Update
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

export default PaymentPage;

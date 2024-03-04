import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { signOut, deleteUser } from "firebase/auth";
import { ageOver18, checkIfFullName } from "../utils/userValidate";
import {
  inputErrorBorder,
  inputErrorIcon,
} from "../components/utils/InputErrorStyles";
import CountrySelectOption from "./utils/CountrySelectOption";
import DatePickerComponent from "./utils/DatePicker";
import dayjs from "dayjs";
import axios from "axios";

function RegistrationForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const [profilePic, setprofilePic] = useState(null);

  const onSubmit = async (data) => {
    // validate full name
    if (!checkIfFullName(data.fullName)) {
      console.log(data.fullName);
      console.log("Invalid full name.");
      alert("Invalid full name.");
      return;
    }

    const formatSingleDate = (inputDate) => {
      return dayjs(inputDate).format("YYYY-MM-DD");
    };

    // validate age
    if (!ageOver18(data.dob)) {
      console.error("You must be at least 18 years old.");
      alert("You must be at least 18 years old.");
      return;
    }

    // auth part

    // declare outside trycatch to expand scope
    let user = null;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      user = userCredential.user;

      const formData = new FormData();

      if (data.dob) {
        const formattedDOB = formatSingleDate(data.dob);
        console.log("Appending formattedDOB:", formattedDOB); // Debugging
        formData.append("dateOfBirth", formattedDOB);
      }

      if (profilePic) {
        formData.append("profilePic", profilePic);
      }

      Object.keys(data).forEach((key) => {
        if (!["dob", "profilePicUrl", "dateOfBirth"].includes(key)) {
          console.log(`Appending ${key}:`, data[key]); // Debugging
          formData.append(key, data[key]);
        }
      });

      formData.append("uId", user.uid);

      const response = await axios.post(
        "http://localhost:4000/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // sign out after register instantly
      await signOut(auth);

      console.log(response);
      alert("Registration successful!");
      navigate("/users/login");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        alert("This email is already taken. Please use a different email.");
      } else if (error.response && error.response.data.message) {
        // Displaying the custom error message from the API
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again later.");
      }
      // delete user in case registration fail
      console.log(user);
      if (user) {
        deleteUser(user)
          .then(() => {
            console.log("User deleted due to failed registration process");
          })
          .catch((deleteError) => {
            console.error("Failed to delete user", deleteError);
          });
      }

      return;
    }
  };

  const handleFileChange = (file) => {
    setprofilePic(file);
  };

  console.log(profilePic);

  const fileInputRef = useRef(null);

  // กำหนดไม่ให้เลือกวันนี้กับหลังจากนี้
  const yesterday = dayjs().subtract(1, "day").toISOString();

  useEffect(() => {
    return () => {
      if (profilePic) {
        // เอาไฟล์ที่อัปโหลดก่อนหน้านี้ออก เป็นขั้นตอนสำคัญในการบริหารทรัพยากรให้มีประสิทธิภาพ
        URL.revokeObjectURL(profilePic);
      }
    };
  }, [profilePic]);

  return (
    <>
      <section className="bg-register-bg flex justify-center items-center min-h-screen">
        <div className="bg-utilBG max-w-fit px-20 py-10 my-20 text-left">
          <form
            className="flex flex-col items-start justify-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="headline2 text-green800">Register</h1>
            <div className="flex flex-col mt-10">
              {/* --- Basic Information start --- */}
              <p className="justify-start headline5 text-gray600">
                Basic Information
              </p>
              <div className="mt-5 relative">
                <label htmlFor="fullName">Full Name</label>
                <br></br>
                <input
                  {...register("fullName", {
                    required: true,
                  })}
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your name and last name"
                  className={inputErrorBorder(errors, "fullName")}
                />
                {inputErrorIcon(errors, "fullName")}
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
                    placeholder="Enter your username"
                    className={inputErrorBorder(errors, "username")}
                  />
                  {inputErrorIcon(errors, "username")}
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
                    placeholder="Enter your email"
                    className={inputErrorBorder(errors, "email")}
                  />
                  {inputErrorIcon(errors, "email")}
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
                    placeholder="Enter your password"
                    //password.length >= 12
                    minLength={12}
                    className={inputErrorBorder(errors, "password")}
                  />
                  {inputErrorIcon(errors, "password")}
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
                    placeholder="Enter your ID Number"
                    inputMode="numeric"
                    maxLength={13}
                    minLength={13}
                    className={inputErrorBorder(errors, "idNumber")}
                  />
                  {inputErrorIcon(errors, "idNumber")}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <div className="relative">
                  <label htmlFor="dob" className="body2">
                    Date of Birth
                  </label>
                  <br></br>
                  <Controller
                    name="dob"
                    control={control}
                    rules={{ required: true }}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { errors },
                    }) => (
                      <DatePickerComponent
                        name={name}
                        value={value ? dayjs(value).toISOString() : ""}
                        onChange={(newValue) => {
                          console.log(newValue); // Log to inspect the structure
                          // Directly using the Dayjs object from newValue.target.value
                          const dateValue = newValue.target.value;
                          if (dateValue && dateValue.$isDayjsObject) {
                            onChange(dateValue.toISOString()); // Convert to ISO string for consistency
                          } else {
                            onChange(""); // Reset or handle as needed
                          }
                        }}
                        onBlur={onBlur}
                        maxDate={yesterday}
                      />
                    )}
                  />
                  {inputErrorIcon(errors, "dateOfBirth")}
                </div>
                <div className="relative">
                  <label htmlFor="country" className="body2">
                    Country
                  </label>
                  <br></br>
                  <Controller
                    name="country"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CountrySelectOption
                        {...field}
                        selectedCountry={field.value}
                        isDisabled={false}
                        handleInputChange={field.onChange}
                        className={inputErrorBorder(errors, "country")}
                      />
                    )}
                  />
                  {inputErrorIcon(errors, "country")}
                </div>
              </div>
              <hr className="mt-10"></hr>
              <div className="mt-10">
                <label
                  htmlFor="profilePicture"
                  className="headline5 text-gray600"
                >
                  Profile Picture
                </label>
                <br></br>
                {profilePic ? (
                  <img
                    src={URL.createObjectURL(profilePic)}
                    alt="Profile Picture"
                    className="size-40 object-cover mt-5"
                    onClick={() => fileInputRef.current.click()}
                  />
                ) : (
                  <div className="size-40 bg-gray200 text-orange500 mt-5 relative">
                    <div
                      className="body2 flex flex-col justify-center items-center absolute right-9 top-12"
                      onClick={() => fileInputRef.current.click()}
                    >
                      <IoAdd className="text-2xl transform scale-110" />
                      <p>Upload Photo</p>
                    </div>
                  </div>
                )}
                <Controller
                  name="profilePicUrl"
                  control={control}
                  defaultValue={[]}
                  render={({ field: { onChange, onBlur, name, ref } }) => (
                    <input
                      type="file"
                      id="profilePicUrl"
                      className="hidden"
                      name={name}
                      ref={(e) => {
                        ref(e);
                        fileInputRef.current = e;
                      }}
                      onBlur={onBlur}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          handleFileChange(file);
                          onChange(file);
                        }
                      }}
                    />
                  )}
                />
                <hr className="mt-10"></hr>
              </div>
              {/* --- Basic Information end --- */}
              {/* --- Credit Card 2 start --- */}
              <div className="flex flex-col pt-10 mt-5">
                <p className="justify-start headline5 text-gray600">
                  Credit Card
                </p>
                <div className="grid grid-cols-2 gap-10 mt-5">
                  <div className="relative">
                    <label htmlFor="cardNumber" className="body2">
                      Card Number
                    </label>
                    <br></br>
                    <input
                      {...register("cardNumber", {
                        required: true,
                        pattern: {
                          value: /^\d{16}$/,
                          message: "Card number must be 16 digits",
                        },
                      })}
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      // credit card no >= 16
                      maxLength={16}
                      minLength={16}
                      inputMode="numeric"
                      placeholder="Enter your card number"
                      className={inputErrorBorder(errors, "cardNumber")}
                    />
                    {inputErrorIcon(errors, "cardNumber")}
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
                      placeholder="Enter your card name"
                      className={inputErrorBorder(errors, "cardOwner")}
                    />
                    {inputErrorIcon(errors, "cardOwner")}
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
                      placeholder="MM / YY"
                      className={inputErrorBorder(errors, "cardExpiry")}
                    />
                    {inputErrorIcon(errors, "cardExpiry")}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <button
                  className="btn w-full bg-orange600 hover:bg-orange500 active:bg-orange700 text-body1 text-utilWhite font-fontWeight6 mb-4"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div>
                <span className="text-body1 text-gray700">
                  Already have an account?
                </span>{" "}
                <Link
                  to="/users/login"
                  className=" font-sans font-fontWeight6 text-orange500"
                >
                  Login
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

export default RegistrationForm;

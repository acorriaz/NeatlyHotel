import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../hooks/useAuth.jsx";
import { useEffect, useState, useRef } from "react";
import { IoCloseCircle, IoAdd } from "react-icons/io5";
import {
  inputErrorBorder,
  inputErrorIcon,
} from "../utils/InputErrorStyles.jsx";
import axios from "axios";
import { auth } from "../../config/firebase-config.js";
import { ageOver18, checkIfFullName } from "../../utils/userValidate.js";
import dayjs from "dayjs";
import CountrySelectOption from "../utils/CountrySelectOption.jsx";
import DatePickerComponent from "../utils/DatePicker.jsx";

function EditUserProfile({ onSectionChange }) {
  const { isAuthenticated, userData, refreshUserData } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      idNumber: "",
      dob: "",
      country: "",
    },
  });
  const [profilePic, setProfilePic] = useState(
    userData?.userProfile?.profilePicUrl || null
  );
  console.log(userData);

  const fileInputRef = useRef(null);

  const handleRemoveImage = (e) => {
    setProfilePic(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    console.log(profilePic);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
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

    Object.keys(data).forEach((key) => {
      if (key === "dob") {
        formData.append("dateOfBirth", formatSingleDate(data[key]));
      } else if (key !== "profilePicUrl") {
        formData.append(key, data[key]);
      }
    });

    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    try {
      const updateUser = await axios.put(
        `http://localhost:4000/users/update-user/${auth.currentUser.uid}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      refreshUserData();
      alert("Update profile successfully!", updateUser);
      console.log(userData);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data.message) {
        // Displaying the custom error message from the API
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again later.");
      }
      return;
    }
  };

  // if client receive data, update input field with these
  useEffect(() => {
    if (isAuthenticated && userData) {
      reset({
        fullName: userData?.userProfile?.fullName || "",
        username: userData?.username || "",
        idNumber: userData?.userProfile?.idNumber || "",
        dob: userData?.userProfile?.dateOfBirth || "",
        country: userData?.userProfile?.country || "",
      });
    }
  }, [userData]);

  // if client already has profile fic, update profile pic upload frame
  // with this
  useEffect(() => {
    if (userData?.userProfile?.profilePicUrl) {
      setProfilePic(userData.userProfile.profilePicUrl);
    }
  }, [userData?.userProfile?.profilePicUrl]);

  useEffect(() => {
    return () => {
      if (profilePic) {
        // เอาไฟล์ที่อัปโหลดก่อนหน้านี้ออก เป็นขั้นตอนสำคัญในการบริหารทรัพยากรให้มีประสิทธิภาพ
        URL.revokeObjectURL(profilePic);
      }
    };
  }, [profilePic]);

  const profilePicSrc =
    profilePic instanceof File ? URL.createObjectURL(profilePic) : profilePic;

  const yesterday = dayjs().subtract(1, "day").toISOString();

  return (
    <>
      <main className="flex justify-center items-center bg-utilBG min-h-screen">
        <section className="bg-utilBG w-7/12 h-full pt-40 mb-10 text-left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="flex justify-between items-center">
              <h1 className="headline2 text-green800">Profile</h1>
              <section className="flex justify-center items-center gap-x-2">
                <div>
                  <button
                    className="btn text-body1 px-8 font-fontWeight6 border-2 rounded bg-transparent text-orange500 hover:text-orange400 hover:border-orange400 hover:bg-transparent active:text-orange600 active:border-orange600 focus:text-orange600 border-orange500"
                    onClick={() => onSectionChange("payment")}
                  >
                    Edit Payment
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn text-body1 px-8 font-fontWeight6 rounded bg-orange600 hover:bg-orange500 active:bg-orange700 text-white cursor-pointer"
                  >
                    Update Profile
                  </button>
                </div>
              </section>
            </section>
            <h2 className="headline5 text-gray600 mt-10">Basic Information</h2>
            <div className="flex flex-col mt-10">
              <div className="relative">
                <label htmlFor="fullName" className="body1 text-gray900">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className={inputErrorBorder(errors, "fullName")}
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                />
                {inputErrorIcon(errors, "fullName")}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-5">
              <div className="relative">
                <label htmlFor="username" className="body1 text-gray900">
                  Username
                </label>
                <br></br>
                <input
                  id="username"
                  name="username"
                  type="username"
                  className={inputErrorBorder(errors, "username")}
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {inputErrorIcon(errors, "username")}
              </div>
              <div className="relative">
                <label htmlFor="idNumber" className="body1 text-gray900">
                  ID Number
                </label>
                <br></br>
                <input
                  id="idNumber"
                  name="idNumber"
                  type="text"
                  inputMode="numeric"
                  maxLength={13}
                  minLength={13}
                  className={inputErrorBorder(errors, "idNumber")}
                  {...register("idNumber", {
                    required: "ID Number is required",
                    pattern: {
                      value: /^\d{13}$/,
                      message: "ID Number must be 13 digits",
                    },
                  })}
                />
                {inputErrorIcon(errors, "idNumber")}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-5">
              <div className="relative">
                <label htmlFor="dob" className="body1 text-gray900">
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
                    <input 
                        {...register("dob", {
                        require: true
                      })}
                      name="dob"
                      id="dob"
                      type="date"
                      placeholder="EEEE, DD MMMM YYYY"
                      className={inputErrorBorder(errors, "dob")}
                    />
                  )}
                />
                {inputErrorIcon(errors, "dob")}
              </div>
              <div className="relative">
                <label htmlFor="country" className="body1 text-gray900">
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
            <hr className="my-10"></hr>
            <label htmlFor="profilePicture" className="headline5 text-gray600">
              Profile Picture
            </label>
            <br></br>
            {profilePic ? (
              <div className="relative">
                <img
                  src={profilePicSrc}
                  alt="Profile Picture"
                  className="size-40 rounded object-cover mt-5"
                  onClick={() => fileInputRef.current.click()}
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute inset-x-0 bottom-[140px] left-[140px] text-utilRed size-fit"
                >
                  <IoCloseCircle size="1.8em" />
                </button>
              </div>
            ) : (
              <div className="size-40 rounded bg-gray200 text-orange500 mt-5 relative">
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
                      setProfilePic(file);
                    }
                  }}
                />
              )}
            />
          </form>
        </section>
      </main>
    </>
  );
}

export default EditUserProfile;

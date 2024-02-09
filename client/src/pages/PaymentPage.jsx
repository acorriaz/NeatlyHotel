import { useForm, Controller } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { IoAlertCircle, IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import supabase from "../../../server/utils/db";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";

function PaymentPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedFileState, setSelectedFileState] = useState(null);

  const onSubmit = async (data) => {
    let errorMessage = "";
    //Age > 18
    const ageOver18 = (dateOfBirth) => {
      const birthday = new Date(dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthday.getFullYear();
      const month = today.getMonth() - birthday.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age--;
      }
      return age >= 18;
    };

    if (!ageOver18(data.dateOfBirth)) {
      console.error("You must be at least 18 years old to register.");
      return;
    }

    //username ไม่ซ้ำ
    //email มี @ .com ไม่ซ้ำ
    const userCheck = await supabase
      .from("users")
      .select("username, email")
      .or(`username.eq.${data.username}, email.eq.${data.email}`);

    if (userCheck.error) {
      console.error(userCheck.error);
      return;
    }

    if (userCheck.data.length > 0) {
      if (userCheck.data.find((user) => user.username === data.username)) {
        errorMessage = "Sorry! This username has already been taken!";
      } else if (userCheck.data.find((user) => user.email === data.email)) {
        errorMessage = "Sorry! This email has already been used!";
      }

      console.error(errorMessage);
      return;
    }

    //ID no. is no. and >=13 and ไม่ซ้ำ
    const profileCheck = await supabase
      .from("users_profile")
      .select("id_number")
      .eq("id_number", data.idNumber);

    if (profileCheck.error) {
      console.error(profileCheck.error);
      return;
    }

    if (profileCheck.data.length > 0) {
      errorMessage = "Sorry! This ID number has already been used!";
      console.error(errorMessage);
      return;
    }

    // auth part

    try {
      const { data: signUpResult, error } = await supabase.auth.signUp({
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

      if (signUpResult.user) {
        const { data: profileData, error: profileError } = await supabase
          .from("users_profile")
          .insert([
            {
              user_profile_id: signUpResult.user.id,
              full_name: data.fullName, // Adjust these field names as necessary
              id_number: data.idNumber,
              date_of_birth: data.dateOfBirth,
              country: data.country,
              card_number: data.creditCardNo,
              card_owner: data.cardOwner,
              card_expiry_date: data.cardExpiry,
              card_cvc_cvv: data.cvcCvv,
            },
          ]);

        if (profileError) {
          alert(profileError.message);
          return;
        }

        alert("Registration successful!");
      } else if (error) {
        alert(error.message);
        return;
      }
    } catch (error) {
      alert(error.message);
      return;
    }
  };

  const handleFileChange = (file) => {
    setSelectedFileState(file);
  };

  const fileInputRef = useRef(null);

  // กำหนดไม่ให้เลือกวันนี้กับหลังจากนี้
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const maxDate = yesterday.toISOString().split("T")[0];

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

  useEffect(() => {
    return () => {
      if (selectedFileState) {
        // เอาไฟล์ที่อัปโหลดก่อนหน้านี้ออก เป็นขั้นตอนสำคัญในการบริหารทรัพยากรให้มีประสิทธิภาพ
        URL.revokeObjectURL(selectedFileState);
      }
    };
  }, [selectedFileState]);

  return (
    <>
      <NavigationBar />
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
                <label htmlFor="full_name">Full Name</label>
                <br></br>
                <input
                  {...register("full_name", {
                    required: true,
                  })}
                  id="full_name"
                  name="full_name"
                  type="text"
                  placeholder="Enter your name and last name"
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
                    placeholder="Enter your username"
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
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
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
                    placeholder="Enter your ID Number"
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
                    type="date"
                    placeholder="Pick your date of birth"
                    className={inputErrorBorder("dateOfBirth")}
                    max={maxDate}
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
                    <option>select country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">
                      Congo, Democratic Republic of the Congo
                    </option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote D'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curacao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">
                      Macedonia, the Former Yugoslav Republic of
                    </option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthelemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="CS">Serbia and Montenegro</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.s.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                  {inputErrorIcon("country")}
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
                {selectedFileState ? (
                  <img
                    src={URL.createObjectURL(selectedFileState)}
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
                  name="avatar"
                  control={control}
                  defaultValue={[]}
                  render={({ field: { onChange, onBlur, name, ref } }) => (
                    <input
                      type="file"
                      id="profilePicture"
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
                      placeholder="Enter your card number"
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
                      placeholder="Enter your card name"
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
                      placeholder="MM / YY"
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
                      placeholder="CVC/CVV"
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
                  Register
                </button>
              </div>
              <div>
                <span className="text-body1 text-gray700">
                  Already have an account?
                </span>{" "}
                <Link
                  to="/hotel/user-login"
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

export default PaymentPage;

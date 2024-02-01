import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const maxDate = yesterday.toISOString().split("T")[0];

  const selectedFile = watch("avatar");

  useEffect(() => {
    return () => {
      if (selectedFile && selectedFile[0]) {
        // เอาไฟล์ที่อัปโหลดก่อนหน้านี้ออก เป็นขั้นตอนสำคัญในการบริหารทรัพยากรให้มีประสิทธิภาพ
        URL.revokeObjectURL(selectedFile[0]);
      }
    };
  });

  return (
    <>
      <section className="bg-register-bg flex justify-center items-center min-h-screen">
        <div className="bg-utilBG max-w-fit px-20 py-10">
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="headline2">Register</h1>
            <div className="flex flex-col">
              <p className="justify-start headline5 text-gray600">
                Basic Information
              </p>
              <div className="mt-5">
                <label htmlFor="fullname">Full Name</label>
                <br></br>
                <input
                  {...register("fullname", {
                    required: true,
                  })}
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Enter your name and last name"
                  className={`w-full bg-utilWhite focus:border-orange500 disabled:bg-gray600 border rounded border-gray400 py-3 pr-4 pl-3 ${
                    errors.fullname
                      ? "border-utilRed"
                      : "border-gray400 focus:border-orange500 disabled:bg-gray600"
                  }`}
                />
              </div>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <div>
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
                    className={`w-full bg-utilWhite focus:border-orange500 disabled:bg-gray600 border rounded border-gray400 py-3 pr-4 pl-3 ${
                      errors.username
                        ? "border-utilRed"
                        : "border-gray400 focus:border-orange500 disabled:bg-gray600"
                    }`}
                  />
                </div>
                <div>
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
                    className={`w-full bg-utilWhite focus:border-orange500 disabled:bg-gray600 border rounded border-gray400 py-3 pr-4 pl-3 ${
                      errors.email
                        ? "border-utilRed"
                        : "border-gray400 focus:border-orange500 disabled:bg-gray600"
                    }`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <div>
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
                    className={`w-full bg-utilWhite focus:border-orange500 disabled:bg-gray600 border rounded border-gray400 py-3 pr-4 pl-3 ${
                      errors.password
                        ? "border-utilRed"
                        : "border-gray400 focus:border-orange500 disabled:bg-gray600"
                    }`}
                  />
                </div>
                <div>
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
                    className={`w-full bg-utilWhite focus:border-orange500 disabled:bg-gray600 border rounded border-gray400 py-3 pr-4 pl-3 ${
                      errors.idNumber
                        ? "border-utilRed"
                        : "border-gray400 focus:border-orange500 disabled:bg-gray600"
                    }`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <div>
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
                    className={`w-full bg-utilWhite focus:border-orange500 disabled:bg-gray600 border rounded border-gray400 py-3 pr-4 pl-3 ${
                      errors.dateOfBirth
                        ? "border-utilRed"
                        : "border-gray400 focus:border-orange500 disabled:bg-gray600"
                    }`}
                    max={maxDate}
                  />
                </div>
                <div>
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
                    className={`w-full bg-utilWhite focus:border-orange500 disabled:bg-gray600 border rounded border-gray400 py-3 pr-4 pl-3 ${
                      errors.country
                        ? "border-utilRed"
                        : "border-gray400 focus:border-orange500 disabled:bg-gray600"
                    }`}
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
                </div>
              </div>
              <hr className="mt-5"></hr>
              <div className="mt-5">
                <label
                  htmlFor="profilePicture"
                  className="headline5 text-gray600"
                >
                  Profile Picture
                </label>
                <br></br>
                <Controller
                  name="avatar"
                  control={control}
                  defaultValue={[]}
                  render={({ field: { onChange, onBlur, name, ref } }) => (
                    <input
                      type="file"
                      id="profilePicture"
                      name={name}
                      ref={ref}
                      onBlur={onBlur}
                      onChange={(e) => onChange(e.target.files)}
                    />
                  )}
                />
                {selectedFile && selectedFile[0] && (
                  <div>
                    <p>Preview:</p>
                    <img
                      src={URL.createObjectURL(selectedFile[0])}
                      alt="Avatar Preview"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                )}
              </div>
              <button className="btn btn-wide bg-orange600" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;

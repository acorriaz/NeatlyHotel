import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { auth } from "../../config/firebase-config";
import axios from "axios";

import CountrySelectOption from "../utils/CountrySelectOption";

export default function UserUpdateProfile() {
  const [userDataInput, setUserDataInput] = useState({
    fullName: "",
    dateOfBirth: "",
    idNumber: "",
    country: "",
  })
  const [profilePic, setProfilePic] = useState(null);
  const { userData } = useAuth();


  useEffect(() => {
    setUserDataInput({
      fullName: userData.userProfile.fullName,
      dateOfBirth: userData.userProfile.dateOfBirth,
      idNumber: userData.userProfile.idNumber,
      country: userData.userProfile.country,
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(userDataInput).forEach((key) => {
      formData.append(key, userDataInput[key]);
    })

    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    try {
      const response = await axios.put(`http://localhost:4000/users/update-user/${auth.currentUser.uid}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name && value) {
      setUserDataInput((prevData) => {
        return {
          ...prevData,
          [name]: value,
        };
      });
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h1>Profile</h1>
        <button>Update Profile</button>
      </div>
      <div>
        <h2>Basic Information</h2>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" onChange={(e) => handleInputChange(e)} value={userDataInput.fullName} />
        </div>
        <div>
          <label htmlFor="idNumber">ID Number</label>
          <input type="text" id="idNumber" name="idNumber" onChange={(e) => handleInputChange(e)} value={userDataInput.idNumber} />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" onChange={(e) => handleInputChange(e)} value={userDataInput.dateOfBirth} />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <CountrySelectOption selectedCountry={userDataInput.country} handleInputChange={handleInputChange} />
        </div>
      </div>
      <hr />
      <div>
        <input type="file" id="profilePicUrl" name="profilePicUrl" onChange={(e) => handleFileChange(e)} />
      </div>
    </form>
  );
}

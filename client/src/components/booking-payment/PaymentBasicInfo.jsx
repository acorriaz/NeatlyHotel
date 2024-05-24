import { useAuth } from "../hooks/useAuth";
import CountrySelectOption from "../utils/CountrySelectOption";

export default function PaymentBasicInfo() {
  const { userData } = useAuth();
  const authData = userData;

  console.log(userData);

  return (
    <div className="h-fit">
      <h2 className="mb-6 font-inter font-semibold text-xl text-gray600">
        Basic Information
      </h2>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={authData.userProfile.fullName}
            readOnly={true}
            className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={authData.email}
            readOnly={true}
            className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="idNumber">ID Number</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={authData.userProfile.idNumber}
            readOnly={true}
            className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="birthDate">Date of Birth</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={authData.userProfile.dateOfBirth}
            readOnly={true}
            className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="country">Country</label>
          <CountrySelectOption
            selectedCountry={authData.userProfile.country}
            className="max-w-full h-12 p-3 border-[1px] border-gray300 rounded-md"
            isDisabled={true}
          />
        </div>
      </form>
    </div>
  );
}

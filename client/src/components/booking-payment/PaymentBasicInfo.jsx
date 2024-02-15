import { useAuth } from "../hooks/useAuth";
import CountrySelectOption from "../utils/CountrySelectOption";

export default function PaymentBasicInfo() {
  const { userData } = useAuth();
  const authData = userData;

  return (
    <>
      <h2>Basic Information</h2>
      <form>
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={authData.fullName}
            readOnly={true}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={authData.email}
            readOnly={true}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="idNumber">ID Number</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={authData.idNumber}
            readOnly={true}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="birthDate">Date of Birth</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={authData.birthDate}
            readOnly={true}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country">Country</label>
          <CountrySelectOption
            selectedCountry={authData.country}
            isDisabled={true}
          />
        </div>
      </form>
    </>
  );
}

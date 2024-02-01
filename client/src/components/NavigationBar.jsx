import neatlyLogo from "../assets/neatly-logo.png";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="m-auto max-w-[1120px] h-[100px] p-0 navbar bg-base-100">
      <div className="flex flex-1 gap-12">
        <img src={neatlyLogo} alt="Neatly Logo" />
        <ul className="flex flex-1 gap-12">
          <Link to="#">
            <li className="font-sans">About Neatly</li>
          </Link>
          <Link to="#">
            <li className="font-sans">Service & Facilities</li>
          </Link>
          <Link to="#">
            <li className="font-sans">Rooms & Suits</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-6">
        <Link to="#">
          <p className="font-sans font-semibold text-sm text-orange-500">
            Log in
          </p>
        </Link>
        <Link to="#">
          <button className="py-3 px-8 rounded font-sans text-sm font-semibold text-white bg-orange-600">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

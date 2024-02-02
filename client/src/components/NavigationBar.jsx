import neatlyLogo from "../assets/neatly-logo.png";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="fixed top-0 z-10 m-auto w-screen h-[100px] p-0 navbar bg-base-100">
      <div className="w-[1200px] m-auto">
        <div className="w-full m-auto flex flex-1 justify-between items-center gap-12">
          <Link to="/hotel">
            <img src={neatlyLogo} alt="Neatly Logo" />
          </Link>
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
        <div className="flex items-center gap-6">
          <Link to="/hotel/user-login">
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
    </div>
  );
}

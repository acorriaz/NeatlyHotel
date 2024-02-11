import neatlyLogo from "../assets/neatly-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export default function NavigationBar() {
  const { isAuthenticated, logout } = useAuth();

  const items = [
    {
      href: "#about",
      title: "About Neatly",
    },
    {
      href: "#services",
      title: "Service & Facilities",
    },
    { href: "#rooms", title: "Rooms & Suits" },
  ];

  function navListEl() {
    return items.map((item, index) => (
      <Link to={`/${item.href}`} key={index}>
        <li className="font-sans">{item.title}</li>
      </Link>
    ));
  }

  function renderAuthAwareNavbar() {
    if (isAuthenticated) {
      return (
        <div className="flex items-center gap-6">
          <Link to="/users/profile">
            <p className="font-sans font-semibold text-sm text-orange-500">
              Profile
            </p>
          </Link>
          <button
            className="py-3 px-8 rounded font-sans text-sm font-semibold text-white bg-orange-600"
            onClick={logout}
          >
            Log out
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-6">
          <Link to="/users/login">
            <p className="font-sans font-semibold text-sm text-orange-500">
              Log in
            </p>
          </Link>
          <Link to="/hotel">
            <button className="py-3 px-8 rounded font-sans text-sm font-semibold text-white bg-orange-600">
              Book Now
            </button>
          </Link>
        </div>
      );
    }
  }

  return (
    <div className="fixed top-0 z-10 m-auto w-screen p-0 navbar bg-base-100">
      <div className="w-[1200px] m-auto">
        <div className="w-full m-auto flex flex-1 justify-between items-center gap-12">
          <Link to="/">
            <img src={neatlyLogo} alt="Neatly Logo" />
          </Link>
          <ul className="flex flex-1 gap-12">{navListEl()}</ul>
        </div>
        {renderAuthAwareNavbar()}
      </div>
    </div>
  );
}

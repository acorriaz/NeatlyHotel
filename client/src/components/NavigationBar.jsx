import React from "react";
import neatlyLogo from "../assets/neatly-logo.png";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  // Items array remains unchanged
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

  // Generate navigation list elements
  function navListEl() {
    return items.map((item, index) => (
      <Link to={`/hotel${item.href}`} key={index}>
        <li className="font-sans">{item.title}</li>
      </Link>
    ));
  }

  return (
    <div className="fixed top-0 z-10 m-auto w-screen p-0 navbar bg-white text-black">
      {" "}
      {/* Adjusted for light mode */}
      <div className="w-[1200px] m-auto">
        <div className="w-full m-auto flex flex-1 justify-between items-center gap-12">
          <Link to="/hotel">
            <img src={neatlyLogo} alt="Neatly Logo" />
          </Link>
          <ul className="flex flex-1 gap-12">{navListEl()}</ul>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/hotel/user-login">
            <p className="font-sans font-semibold text-sm text-orange-500">
              Log in
            </p>
          </Link>
          <Link to="/hotel/result">
            <button className="py-3 px-8 rounded font-sans text-sm font-semibold text-white bg-orange-600">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

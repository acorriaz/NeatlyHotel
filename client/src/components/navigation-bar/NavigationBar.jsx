import React from "react";
import neatlyLogo from "../assets/neatly-logo.png";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const items = [
    { href: "#about", title: "About Neatly" },
    { href: "#services", title: "Service & Facilities" },
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

  return (
    <div className="w-screen h-[100px] m-auto p-0 bg-base-100 flex justify-center items-center fixed top-0 z-10">
      <div className="navbar max-w-[1200px] h-[100px] justify-between items-center">
        <Link to="/">
          <img src={neatlyLogo} alt="Neatly Logo" className="mr-12" />
        </Link>
        <ul className="flex gap-12">{navListEl()}</ul>
        {renderAuthAwareNavbar()}
      </div>
    </div>
  );
}

import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import dafaultProfilePic from "../../assets/defaultImage/dafaultProfilePic.png";

export default function NavigationBarAuth() {
  const { userData, logout } = useAuth();

  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end mr-4 flex justify-center items-center">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 bg-gray100 rounded-full p-3 text-gray600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end flex justify-center items-center">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-12 rounded-full">
            {/* TODO : add user image URL in database */}
            <img
              src={userData?.userProfile?.profilePicUrl || dafaultProfilePic}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-[200px] z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link
              to="/users/update-profile/:userId"
              state={{ section: "profile" }}
            >
              <a className="font-sans text-sm text-gray700">Profile</a>
            </Link>
          </li>
          <li>
            <Link
              to="/users/update-profile/:userId"
              state={{ section: "payment" }}
            >
              <a className="font-sans text-sm text-gray700">Payment Method</a>
            </Link>
          </li>
          <li>
            <Link
              to={"/users/booking-history/" + userData.userId}
              className="font-sans text-sm text-gray700"
            >
              Booking History
            </Link>
          </li>
          <hr className="my-1" />
          <li>
            <a
              className="font-sans text-sm text-gray700"
              onClick={() => logout()}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import dafaultProfilePic from "../../assets/defaultImage/dafaultProfilePic.png";
import { auth } from "../../config/firebase-config";

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
            <span className="badge badge-sm indicator-item bg-red-500 w-[20px] h-[20px] text-white">
              2
            </span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-[370px] bg-base-100 shadow relative"
        >
          <div className="card-body flex flex-col w-[370px] h-fit absolute right-0 top-5 bg-white rounded-md shadow-md">
            <div className="flex w-full h-[90px] justify-center items-center">
              <p>
                Tomorrow is your check-in date with Super Premier View Room ‘Th,
                19 Oct 2022’ We will wait for your arrival!
              </p>
            </div>
            <div className="flex w-full h-[90px] justify-center items-center">
              <p>
                We recieve your refund request You will recieve an email with a
                detail and refund within 48 hours.
              </p>
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
          className="menu menu-sm dropdown-content mt-[200px] z-[1] p-2 shadow-md bg-base-100 rounded-md w-52"
        >
          <li>
            <Link
              to="/users/update-profile/:userId"
              state={{ section: "profile" }}
              className="font-sans text-sm text-gray700"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/users/update-profile/:userId"
              state={{ section: "payment" }}
              className="font-sans text-sm text-gray700"
            >
              Payment Method
            </Link>
          </li>
          <li>
            <Link
              to={`/users/booking-history/${auth.currentUser.uid}`}
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

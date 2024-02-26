import React from "react";
import { IoAlertCircle } from "react-icons/io5";

export const inputErrorBorder = (errors, id) => {
  return `w-full bg-utilWhite border rounded py-3 pr-4 pl-3 relative ${
    errors && errors[id]
      ? "border-utilRed"
      : "border-gray400 focus:border-orange500 disabled:bg-gray200 disabled:border-gray400"
  }`;
};

export const inputErrorIcon = (errors, id) => {
  return (
    errors[id] && (
      <div className="absolute inset-y-0 right-2 top-6 pr-3 flex items-center pointer-events-none text-utilRed">
        <IoAlertCircle />
      </div>
    )
  );
};

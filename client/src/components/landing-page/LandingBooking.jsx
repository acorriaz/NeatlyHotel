import { forwardRef, useState, useEffect } from "react";
import superiorGardenView from "../../assets/landing-page-images/superior-garden-view.jpg";
import SearchBar from "../utils/SearchBar.jsx";

const LandingBooking = forwardRef((props, ref) => {
  return (
    <div
      className="relative max-w-screen h-[900px] flex flex-col justify-center items-center gap-12"
      ref={ref}
    >
      <img
        src={superiorGardenView}
        alt="superior-garden-view"
        className="absolute w-full h-full object-cover"
      />
      <h1 className="relative font-noto-serif text-white text-medium text-center text-[5rem]">
        A Best Place for Your <br />
        Neatly Experience
      </h1>
      <SearchBar />
    </div>
  );
});

export default LandingBooking;

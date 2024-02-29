import { forwardRef, useState, useEffect } from "react";
import landingPageImg from "../../assets/landing-page-images/landingPageImg.jpg";
import SearchBar from "../utils/SearchBar.jsx";

const LandingBooking = forwardRef((props, ref) => {
  return (
    <div
      className="relative max-w-screen h-[900px] flex flex-col justify-center items-center gap-12"
      ref={ref}
    >
      <img
        src={landingPageImg}
        alt="superior-garden-view"
        className="absolute w-full h-full object-cover brightness-75"
      />
      <h1 className="relative font-noto-serif text-white text-medium text-center text-[5rem] mb-20">
        A Best Place for Your <br />
        Neatly Experience
      </h1>
      <SearchBar />
    </div>
  );
});

export default LandingBooking;

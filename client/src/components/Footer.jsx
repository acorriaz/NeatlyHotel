import neatlyLogoWhite from "../assets/neatly-logo-white.svg";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { IoLocationOutline, IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    // TODO : Link bottom icons to different site
    <div className="max-w-fill bg-green800 m-auto text-white">
      <footer className="max-w-[1200px] pt-[66px] m-auto flex justify-between items-start">
        <aside className="font-inter">
          <img src={neatlyLogoWhite} alt="Neatly Logo" className="mb-10" />
          <h2 className="mb-2 text-xl font-semibold">Neatly Hotel</h2>
          <p>The best hotel for rising your experience</p>
        </aside>
        <nav className="mr-20 flex flex-col gap-6">
          <h6 className="mb-10 font-inter font-medium">CONTACT</h6>
          <div className="flex items-center gap-4">
            <FiPhone className="w-[20px] h-[20px] text-green500" />
            <p className="font-ibm">+66 99 999 9999</p>
          </div>
          <div className="flex items-center gap-4">
            <GoMail className="w-[20px] h-[20px] text-green500" />
            <p className="font-ibm">contact@neatlyhotel.com</p>
          </div>
          <div className="flex items-start gap-4">
            <IoLocationOutline className="w-[20px] h-[20px] text-green500" />
            <p className="font-ibm">
              188 Phaya Thai Rd, Thung Phaya Thai,
              <br /> Ratchathewi, Bangkok 10400
            </p>
          </div>
        </nav>
      </footer>
      <hr className="max-w-[1200px] m-auto mt-[90px] border-green700" />
      <footer className="max-w-[1200px] m-auto py-10 flex justify-between items-center">
        <div className="flex gap-3">
          {/* ---------- HERE ---------- */}
          <IoLogoFacebook className="w-6 h-6 text-white" />
          <PiInstagramLogoFill className="w-6 h-6 text-white" />
          <FaTwitter className="w-6 h-6 text-white" />
        </div>
        <p className="text-sm text-green300">Copyright ©2022 Neatly Hotel</p>
      </footer>
    </div>
  );
}

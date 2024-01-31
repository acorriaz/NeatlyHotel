import { useCallback } from "react";

const NavBar = () => {
  const onLogoClick = useCallback(() => {
    // Please sync "home" to the project
  }, []);

  const onNavLinkClick = useCallback(() => {
    // Please sync "home" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "login" to the project
  }, []);

  return (
    <header className="self-stretch h-[100px] bg-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-center py-0 px-5 gap-[229px] top-[0] z-[99] sticky max-w-full text-center text-sm text-black font-open-sans border-b-[1px] border-solid border-gray-300 mq750:gap-[57px] mq1125:gap-[114px] mq450:gap-[29px]">
      <div className="self-stretch flex flex-row items-center justify-start gap-[48px] max-w-full mq750:gap-[24px]">
        <img
          className="h-[45px] w-[167px] relative cursor-pointer"
          loading="eager"
          alt=""
          src="src/assets/logo.svg"
          onClick={onLogoClick}
        />
        <div className="self-stretch flex flex-row items-start justify-start max-w-full mq1050:hidden">
          <div
            className="self-stretch flex flex-row items-center justify-center py-2.5 px-[22px] cursor-pointer"
            onClick={onNavLinkClick}
          >
            <div className="relative leading-[16px] whitespace-nowrap">
              About Neatly
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[22px]">
            <div className="relative leading-[16px] whitespace-nowrap">{`Service & Facilities`}</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[22px]">
            <div className="relative leading-[16px] whitespace-nowrap">{`Rooms & Suits`}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start mq750:hidden">
        <button
          className="cursor-pointer [border:none] py-[42px] pr-5 pl-6 bg-[transparent] w-[89px] flex flex-row items-center justify-center box-border"
          onClick={onFrameButtonClick}
        >
          <div className="flex-1 relative text-sm leading-[16px] font-semibold font-open-sans text-orange-500 text-center whitespace-nowrap">
            Log in
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-4 pr-7 pl-8 bg-orange-600 rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-chocolate">
          <div className="relative text-base leading-[16px] font-semibold font-open-sans text-utility-white text-center whitespace-nowrap">
            Book Now
          </div>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
